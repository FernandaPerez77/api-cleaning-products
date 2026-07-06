const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');


dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', require('./src/routes/productRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));

app.get('/', (req, res) => {
    res.send('Hello Cleaning API');
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});