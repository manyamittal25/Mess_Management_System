import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Buyer from './models/Buyer.js';
import Menu from './models/Menu.js';
import Order from './models/Order.js'; 
import Time from './models/Time.js'; 
import User from './models/User.js';

const app = express();
const server = http.createServer(app);

// MongoDB connection string with database name
const mongoURI = 'mongodb+srv://mittalmanya2504:4c5CoGoJ77rj20c2@mess-management.83wztl7.mongodb.net/mess-management?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());

// Example of creating a new Buyer
app.post('/create-buyer', async (req, res, next) => {
    try {
        const newBuyer = new Buyer(req.body);
        await newBuyer.save();
        res.send('Buyer saved successfully!');
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
});

// Example of creating a new Menu item
app.post('/create-menuitem', async (req, res, next) => {
    try {
        const { day, breakfast, lunch, dinner } = req.body;
        const newMenuItem = new Menu({ day, breakfast, lunch, dinner });
        await newMenuItem.save();
        res.send('Menu item saved successfully!');
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
});

// Example of creating a new Order
app.post('/create-order', async (req, res, next) => {
    try {
        const { orderid, selected } = req.body;
        const newOrder = new Order({ orderid, selected });
        await newOrder.save();
        res.send('Order saved successfully!');
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
});

// Example of creating a new Time entry
app.post('/create-time', async (req, res, next) => {
    try {
        const { meal, time, cost } = req.body;
        const newTime = new Time({ meal, time, cost });
        await newTime.save();
        res.send('Time entry saved successfully!');
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
});

// Example of creating a new user
app.post('/create-user', async (req, res) => {
    try {
        const { googleId, displayName, email } = req.body;
        const newUser = new User({ googleId, displayName, email });
        await newUser.save();
        res.send('User saved successfully!');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Error saving user');
    }
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
