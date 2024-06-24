<<<<<<< main
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderid: String,
    selected: Object
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
=======
import mongoose from "mongoose";

const OrderSchema = mongoose.model("order", new mongoose.Schema({
    orderid: String,
    selected: Object
}));

// Save an order in progress through RazorPay
export async function saveOrder(orderid, selected) {
    await OrderSchema.create({ orderid, selected });
}

// Get a saved order to update the user after successful payment
export async function getOrder(orderid) {
    const orderObj = await OrderSchema.findOne({ orderid });
    return orderObj;
}
>>>>>>> main
