import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/database.js';
dotenv.config();
//connecting to database
connectDb();

import userRoutes from './routes/user-routes.js';
import productRoutes from './routes/product-routes.js';

const app = express();

const port = process.env.PORT;
app.use ('/api/users', userRoutes);
app.use ('/api/product', productRoutes);

app.get('/',function (req, res) {
    res.send('Hello from the server')
});

app.listen(port, () => console.log(`server is running on port ${port}`));