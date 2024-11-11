import express from 'express';
import config from './config.js'
import handlebars from 'express-handlebars';
import productsRouter from './routes/products.router.js';
import viewsRouter from './routes/views.router.js';
import { Server } from 'socket.io';

const app = express();

const HttpServer = app.listen(config.PORT, () => {
  console.log(`Servidor activo en puerto ${config.PORT}`);
});

const socketServer = new Server(HttpServer);
app.set('socketServer', socketServer);

socketServer.on('connection', socket => {
  console.log(`Nuevo cliente conectado con id ${socket.id}`);

  socket.on('first-message', message => {
    console.log(`Mensaje del cliente ${socket.id}: ${message}`);
  });

  socket.on('new_product', data => {
    socketServer.emit('nuevo_producto', 'Nuevo producto agregado');
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${config.DIRNAME}/views`);
app.set('view engine', 'handlebars');

app.use('/productos', productsRouter);
app.use('/views', viewsRouter);

