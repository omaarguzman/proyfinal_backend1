import { Router } from 'express';
import { Products } from '../config.js';

const router = Router();

router.get('/home', (req, res) => {
  res.status(200).render('home', { Products });
});

router.get('/realTimeProducts', (req, res) => {
  res.status(200).render('realTimeProducts', { Products });
});

router.post('/realTimeProducts', (req, res) => {
  res.status(200).render('realTimeProducts', { Products });
});

export default router;