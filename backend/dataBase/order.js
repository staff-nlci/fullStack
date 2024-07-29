//order  schema in mongoose

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    items:Array(any),
    status:Number

});
 const Order = mongoose.model('orders', orderSchema);
 module.exports = Order;
 //to use this model in your routes you would require it like this:
 //const Order = require('./order');
 //you can then use it in your routes like this:
 // router.post('/orders', async (req, res) => {
 //     try {
 //         const newOrder = new Order(req.body);
 //         await newOrder.save();
 //         res.status(201).json(newOrder);
 //     } catch (error) {
 //         res.status(400).json({ error: error.message });
 //     }
 // });
 // you can also use it in your controllers like this:
 // const createOrder = async (req, res) => {
 //     try {
 //         const newOrder = new Order(req.body);
 //         await newOrder.save();
 //         res.status(201).json(newOrder);
 //     } catch (error) {
 //         res
 //             .status(400)
 //             .json({ error: error.message });
 //     }
 // };
 // and then you can call it in your routes like this:
 // router.post('/orders', createOrder);
 // you can also use it in your tests like this:
 // const request = supertest(app);
 // const sampleOrder = {
 //     items: ['item1', 'item2'],
 //     status: 1
 // };
 // it('should create a new order', async () => {
 //     const response = await request.post('/orders').send(sampleOrder);
 //     expect(response.status).toBe(201);
 // });
 // you can also use it in your integration tests like this:
 // const Order = require('./order');
 // const sampleOrder = {
 //     items: ['item1', 'item2'],