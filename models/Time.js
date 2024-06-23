import mongoose from 'mongoose';

const TimeSchema = new mongoose.Schema({
    meal: String,
    time: String,
    cost: Number
});

const Time = mongoose.model("Time", TimeSchema);

export default Time;
