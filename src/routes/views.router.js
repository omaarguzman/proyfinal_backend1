import { Router } from 'express';
import ProductController from '../dao/products.controller.js';

const router = Router();
const controller = new ProductController();

router.get('/products/:pag?', async (req, res) => {
    const pag = req.params.pag || 1;
    const data = await controller.getPaginated(pag);
    
    res.status(200).render('products', { products: data });
});


export default router;