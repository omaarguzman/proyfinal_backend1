import { Router } from 'express';
import ProductController from '../dao/products.controller.js';

const router = Router();
const controller = new ProductController();

router.get('/', async (req, res) => {
    const data = await controller.get();
    res.status(200).send({ error: null, products: data });
});

export default router;