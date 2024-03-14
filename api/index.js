import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
            console.log('MongoDB is connected')
    })
    .catch((error) => {
        console.log(error.message)
    })
    
const app = express()

app.use(express.json())
app.use(cookieParser())

app.listen(3000, () => {
    console.log("Sever is running on port 3000!")
})

// req is data sent to api, res is data received from api
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

// Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})