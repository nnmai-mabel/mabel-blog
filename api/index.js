import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
            console.log('MongoDB is connected')
    })
    .catch((error) => {
        console.log(error.message)
    })
// SWEmH7M9LNDgoYm0
const app = express()

app.listen(3000, () => {
    console.log("Sever is running on port 3000!")
})