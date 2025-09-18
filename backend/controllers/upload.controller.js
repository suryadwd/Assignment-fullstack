import { pool } from '../Database/db.js';
import { v4 as uuidv4 } from 'uuid';
import textract from 'textract';

// Extract text using textract
const extractText = (file) => {
  return new Promise((resolve, reject) => {
    const mimeType = file.mimetype;

    textract.fromBufferWithMime(mimeType, file.buffer, (err, text) => {
      if (err) return reject(err);
      resolve(text);
    });
  });
};

export const uploadContract = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const userId = req.user.user_id;
    const docId = uuidv4();
    const filename = file.originalname;

    // Extract text
    const text = await extractText(file);
    if (!text) return res.status(400).json({ error: 'Failed to extract text from file' });

    // Split text into 500-word chunks
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const chunkSize = 500;
    const chunks = [];
    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(' '));
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // Insert document metadata
      await client.query(
        `INSERT INTO documents (doc_id, user_id, filename)
         VALUES ($1, $2, $3)`,
        [docId, userId, filename]
      );

      // Insert chunks (text + metadata only)
      for (let i = 0; i < chunks.length; i++) {
        const chunkId = uuidv4();
        const metadata = { page: i + 1, filename };

        await client.query(
          `INSERT INTO chunks (chunk_id, doc_id, user_id, text_chunk, metadata)
           VALUES ($1, $2, $3, $4, $5)`,
          [chunkId, docId, userId, chunks[i], metadata]
        );
      }

      await client.query('COMMIT');

      res.status(200).json({
        message: 'File uploaded and parsed successfully',
        docId,
        chunksCount: chunks.length
      });
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('DB insertion error:', err);
      res.status(500).json({ error: 'Failed to save chunks in DB' });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
};
