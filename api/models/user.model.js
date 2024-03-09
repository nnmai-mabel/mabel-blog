import mongoose from 'mongoose'

// Create userSchema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
}, {timestamps: true}
)

// Create User from userSchema
const User = mongoose.model('User', userSchema)

export default User