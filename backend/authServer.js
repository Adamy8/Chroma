require('dotenv').config();
import express from 'express';
import { connectDB } from './config/db.js';
import userRoutes from './routes/router.js';

const PORT = process.env.NodeJS_PORT || 5000;

const app = express();
app.use(express.json());
app.use("/api/", userRoutes);


app.listen(PORT,()=>{
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
