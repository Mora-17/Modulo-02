import mongoose from "mongoose";

const usersSchema = new mongoose.Schema ({

firstName: { 

    type: String,
    required: true
},

middleName: {

    type: String,
required: false
}, 

lastName: {

    type: String,
    required: true
},

username: {

    type: String,
    required: true
},

email: {type: String,
    required: true

},

age: {type: Number,

    required: true
},

password: {type:String,
    required: true
},

role: {type: String,
    enum: ["Admin", "user"],
    required: true

}
});

export const userModel = mongoose.model ("users", usersSchema)