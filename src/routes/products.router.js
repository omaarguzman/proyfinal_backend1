import { Router } from 'express';
import ProductController from '../dao/products.controller.js';

const router = Router();
const controller = new ProductController();

router.get('/', async (req, res) => {
    const data = await controller.get();    
    res.status(200).send({ error: null, products: data });
});

router.get('/paginated/:pag?', async (req, res) => {
    const pag = req.params.pg || 1;
    const data = await controller.getPaginated(pag);
    res.status(200).send({ error: null, data: data });
});

router.post('/', async (req, res) => {
    const { name, price, quantity } = req.body;
    const data = await controller.add( { name: name, price: price, quantity: quantity } );    
    res.status(200).send({ error: null, products: data });
});

router.put('/:_id?', async (req, res) => {
    const { _id } = req.params;
    const { name, price, quantity } = req.body;
    const filter = ( { _id: _id } );
    const updated = { name: name, price: price, quantity: quantity };
    const options = { new: true };
    const process = await controller.update(filter, updated, options);
    res.status(200).send({ error: null, products: data });
});

router.delete('/:_id?', async (req, res) => {
    const { _id } = req.params;
    const filter = ( { _id: _id } );
    const options = {};
    const process = await controller.delete(filter, options);
    res.status(200).send({ error: null, products: data });
});

export default router;