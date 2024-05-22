import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/art.routes.js';


const app = express();

// ---Middleware ---
app.use(express.json(),cors());
app.use('/api', router)


dotenv.config();

const PORT = process.env.PORT;
const DB_Name = process.env.DB_Name
dbConnect(DB_Name)

dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT} 👂`)
);

