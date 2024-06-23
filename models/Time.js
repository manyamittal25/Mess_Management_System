import mongoose from "mongoose";

const TimeSchema = mongoose.model("time", new mongoose.Schema({
    meal: String,
    time: String,
    cost: Number
}));

export async function getTimes() {
    const Times = await TimeSchema.find({}).select({ _id: 0 });
    return Times;
}

export async function setTimes(times) {
    await TimeSchema.deleteMany({});
    await TimeSchema.insertMany(times);
}