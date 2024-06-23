import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    day: { type: String, required: true },
    breakfast: { type: String, required: true },
    lunch: { type: String, required: true },
    dinner: { type: String, required: true }
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
