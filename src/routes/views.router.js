import { Router } from 'express';
import ProductController from '../dao/products.controller.js';

const router = Router();
const controller = new ProductController();

router.get('/products/:pg?', async (req, res) => {
    const pg = req.params.pg || 1;
    const data = await controller.getPaginated(pg);
    
    res.status(200).render('products', { products: data });
});


export default router;