import mongoose, { Schema } from "mongoose";

const gunsSchema = new mongoose.Schema({
    Image: {type: String,
        required: true

    },
    title: {
        type: String, 
        required: true
    },

    description: {
        type: String
    },
    
    price: {
        type: Number,
        required: true

    },

    categories: {

        type: String,
        required: true,
        enum: ["Handguns", "Shotguns", "Home rifles", "Rifles", "AR",]
    },

    isAvailable: {

        type: Boolean,
    }
});

export const gunsModel = mongoose.model ("guns", productSchema)