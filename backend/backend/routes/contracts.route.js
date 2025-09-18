// routes/contracts.route.js
import express from 'express';
import { getContractDetails, getContracts } from '../controllers/contracts.controller.js';
import { authenticateJWT } from '../Middleware/auth.midddleware.js';

const router = express.Router();

// GET /contracts → list all documents for logged-in user
router.get('/', authenticateJWT, getContracts);
router.get('/:id', authenticateJWT, getContractDetails);
export default router;
