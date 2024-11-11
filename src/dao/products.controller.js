import productModel from './models/products.model.js';
import config from '../config.js';


class ProductController {
    constructor() {}

    get = async () => {
        try {
            return await productModel.find().lean();
        } catch (err) {
            return err.message;
        }
    }

    getPaginated = async (pg) => {
        try {
            return await productModel.paginate({}, { limit: config.ITEMS_PER_PAGE, page: pg, lean: true });
        } catch (err) {
            return err.message;
        }
    }

    add = async (data) => {
        try {
            return await productModel.create(data);
        } catch (err) {
            return err.message;
        }
    }

    update = async (filter, updated, options) => {
        try {
            return await productModel.findOneAndUpdate(filter, updated, options);
        } catch (err) {
            return err.message;
        }
    }

    delete = async (filter, options) => {
        try {
            return await productModel.findOneAndDelete(filter, options);
        } catch (err) {
            return err.message;
        }
    }

    stats = async (size) => {
        try {
            return await productModel.aggregate([
                { $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } } },
                { $sort: { totalQuantity: -1 } }
            ]);
        } catch (err) {
            return err.message;
        }
    }
}


export default ProductController;