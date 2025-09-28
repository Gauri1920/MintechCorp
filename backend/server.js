const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


const testRoute = require('./routes/test');
const authRoute = require('./routes/auth');

app.use('/api/test', testRoute);
app.use('/api/auth', authRoute);


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
