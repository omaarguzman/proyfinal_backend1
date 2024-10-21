import { Router } from 'express';
import { Products } from '../config.js';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ error: null, data: Products});
});

export default router;
