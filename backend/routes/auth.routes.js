import express from 'express';
import { signup, login, ConnectDB,  test, logout, profile} from '../controllers/auth.controller.js';
import { authenticateJWT } from '../Middleware/auth.midddleware.js';

const router = express.Router();

router.get('/', test);
router.get('/test-db', ConnectDB);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', authenticateJWT, profile);

export default router;
