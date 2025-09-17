import express from 'express';
import multer from 'multer';
import { uploadContract } from '../controllers/upload.controller.js';
import { authenticateJWT } from '../Middleware/auth.midddleware.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); 

router.post('/', authenticateJWT, upload.single('file'), uploadContract);

export default router;
