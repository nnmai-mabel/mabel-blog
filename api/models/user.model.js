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
    profilePicture: {
        type: String,
        default: 
        'https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512'
    }
}, {timestamps: true}
)

// Create User from userSchema
const User = mongoose.model('User', userSchema)

export default User