import mongoose from "mongoose";

const BuyerSchema = mongoose.model("buyer", new mongoose.Schema({
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
}));

export async function getBuyer(email) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let randomStr = "";
    for (let i = 0; i < 4; i++)
        randomStr += charset[Math.floor(Math.random() * charset.length)];

    const Buyer = await BuyerSchema.findOneAndUpdate(
        { email: email },
        {
            $setOnInsert: {
                bought: false,
                secret: randomStr,
                this: {
                    monday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    tuesday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    wednesday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    thursday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    friday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    saturday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    sunday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    }
                },
                next: {
                    monday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    tuesday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    wednesday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    thursday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    friday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    saturday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    },
                    sunday: {
                        breakfast: false,
                        lunch: false,
                        dinner: false
                    }
                }
            }
        },
        { new: true, upsert: true }
    ).select({ _id: 0 });
    return Buyer;
}

export async function resetSecret(email) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let randomStr = "";
    for (let i = 0; i < 4; i++)
        randomStr += charset[Math.floor(Math.random() * charset.length)];

    const Buyer = await BuyerSchema.findOneAndUpdate(
        { email: email },
        { secret: randomStr }).select({ _id: 0 });
    return Buyer;
}

export async function checkCoupon(data) {
    const Buyer = await BuyerSchema.findOne({ email: data.email, secret: data.secret });
    if (Buyer == null) return false;
    if (Buyer.this[data.day][data.type]) {
        await BuyerSchema.updateOne({ email: data.email }, { ["this." + data.day + "." + data.type]: false });
        return true;
    }
    return false;
}

export async function saveOrder(email, data) {
    await BuyerSchema.updateOne({ email: email }, { next: data, bought: true });
}

export async function boughtNextWeek(email) {
    await getBuyer(email); // Adjusted to use the exported function directly
    const Buyer = await BuyerSchema.findOne({ email: email });
    return Buyer.bought;
}

export async function allBuyers() {
    const Buyers = await BuyerSchema.find({});
    return Buyers;
}