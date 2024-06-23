// Buyer.js

import mongoose from 'mongoose';

// Define the Buyer schema
const BuyerSchema = new mongoose.Schema({
    email: String,
    secret: String,
    bought: Boolean,
    this: {
        monday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        tuesday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        wednesday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        thursday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        friday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        saturday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        sunday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        }
    },
    next: {
        monday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        tuesday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        wednesday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        thursday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        friday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        saturday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        },
        sunday: {
            breakfast: { type: Boolean, default: false },
            lunch: { type: Boolean, default: false },
            dinner: { type: Boolean, default: false }
        }
    }
});

// Create the Buyer model
const Buyer = mongoose.model('Buyer', BuyerSchema);

export default Buyer;
