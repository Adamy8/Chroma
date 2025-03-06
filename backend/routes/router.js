import express from 'express';
import { register, login, refresh, logout } from '../controllers/user_auth.js';
import { auth, getBudgets } from '../controllers/accessdata.js';
const router = express.Router();

// /auth
router.post('/auth/register', register);
router.post('/auth/login', login);
router.post('/auth/refresh', refresh);
router.post('/auth/logout', logout);


// /budgets  (protected)
router.get('/api/budgets', auth, getBudgets);


export default router;