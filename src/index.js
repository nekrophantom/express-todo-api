import express from 'express'
import dotenv from 'dotenv'
import config from './config/config'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import indexRoutes from "./routes/index.route"
import { ApiError } from './utils/apiError'
import { errorResponse } from './utils/apiResponse'
import { errorHandler } from './middleware/errorHandler'

dotenv.config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression());

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api', indexRoutes)

app.use((req, res, next) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
});

app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`🚀 Server running on http://localhost:${config.port}`);
    
})