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
  const { name, price, description } = req.body;
  const maxId = Math.max(...Products.map(product => +product.id));
  const newProduct = { id: maxId + 1, name, price, description };
  Products.push(newProduct);
  res.status(200).render('realTimeProducts', { Products });
});

router.put('/realTimeProducts/:id', (req, res) => {
  const { id } = parseInt(req.params.id);
  const index = Products.findIndex(product => product.id === +id);

  if (index > -1) {
    Products[index] = req.body;
    res.status(200).render('realTimeProducts', { Products });
  } else {
    res.status(404).send({ error: 'Producto no encontrado' });
  }
});

router.delete('/realTimeProducts/:id', (req, res) => {
  const { id } = parseInt(req.params.id);
  const index = Products.findIndex(product => product.id === +id);

  if (index > -1) {
    Products.splice(index, 1);
    res.status(200).render('realTimeProducts', { Products });
  } else {
    res.status(404).send({ error: 'Producto no encontrado' });
  }
});

export default router;