import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderid: String,
    selected: Object
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
