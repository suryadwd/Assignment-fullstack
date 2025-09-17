// controllers/contracts.controller.js
import { pool } from '../Database/db.js';

// List all documents (already done)
export const getContracts = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const query = `
      SELECT doc_id, filename, uploaded_on, expiry_date, status, risk_score
      FROM documents
      WHERE user_id = $1
      ORDER BY uploaded_on DESC
    `;
    const { rows } = await pool.query(query, [userId]);
    res.status(200).json({ documents: rows });
  } catch (err) {
    console.error('Error fetching documents:', err);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
};

// Get a single document with chunks and metadata
export const getContractDetails = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const docId = req.params.id;

    // Check if the document belongs to the user
    const docQuery = `
      SELECT doc_id, filename, uploaded_on, expiry_date, status, risk_score
      FROM documents
      WHERE doc_id = $1 AND user_id = $2
    `;
    const docResult = await pool.query(docQuery, [docId, userId]);

    if (docResult.rowCount === 0) {
      return res.status(404).json({ error: 'Document not found' });
    }

    const document = docResult.rows[0];

    // Fetch all chunks for this document
    const chunksQuery = `
      SELECT chunk_id, text_chunk, metadata, created_at
      FROM chunks
      WHERE doc_id = $1
      ORDER BY created_at ASC
    `;
    const chunksResult = await pool.query(chunksQuery, [docId]);

    document.chunks = chunksResult.rows;

    res.status(200).json({ document });
  } catch (err) {
    console.error('Error fetching document details:', err);
    res.status(500).json({ error: 'Failed to fetch document details' });
  }
};
