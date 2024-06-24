import mongoose from "mongoose";

// Define the schema
const menuSchema = new mongoose.Schema({
    day: String,
    breakfast: String,
    lunch: String,
    dinner: String
});

// Create the model from the schema
const Menu = mongoose.model("MenuItem", menuSchema);

// Get the weekly menu
export async function getMenu() {
    try {
        const menuItems = await Menu.find({}).select("-_id");
        return menuItems;
    } catch (error) {
        console.error("Error fetching menu items:", error);
        throw error; // Rethrow or handle as needed
    }
}

// Set the weekly menu
export async function setMenus(menus) {
    try {
        await Menu.deleteMany({});
        await Menu.insertMany(menus); // Ensure 'menus' is validated against the schema
    } catch (error) {
        console.error("Error setting menu items:", error);
        throw error; // Rethrow or handle as needed
    }
}
