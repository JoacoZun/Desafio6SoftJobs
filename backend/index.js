require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./src/routes/authRoutes');
const cors = require('cors'); 

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());
app.use(morgan('dev')); 

app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`SERVER UP ON PORT:${PORT}`);
});