import express from 'express'
import './config/mongoDB.js'
import { rateLimitConfig } from './config/rateLimitConfig.js'
import helmet from 'helmet'

import { router as userRouter } from './routers/users.js'
import {router as ProductRouter } from './routers/Product.js'
import { router as healthRouter } from './routers/health.js'

const app = express()
const PORT = 3000

app.use(express.json())

if(process.env.NODE_ENV === "production"){
    app.use(rateLimitConfig)
    app.use(helmet())
}

app.use('/api/v1/products', ProductRouter)
app.use('/api/v1/users', userRouter)
app.use('/health', healthRouter)

app.listen(PORT, (err) => {
    err ? console.log(`server not running: ${err}`)
        :
        console.log(`server up: http://localhost:${PORT}`)
}) 

