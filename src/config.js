import * as url from 'url';

const config = {
    PORT: 5050,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url))
}

export const Products = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      description: 'Descripción del producto 1',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      description: 'Descripción del producto 2',
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 300,
      description: 'Descripción del producto 3',
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 400,
      description: 'Descripción del producto 4',
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 500,
      description: 'Descripción del producto 5',
    }
  ];

  export default config;