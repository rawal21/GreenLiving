const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes =  require("./routes/authRoutes");
const bodyParser = require("body-parser");
const carbonRoutes = require('./routes/carbonRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use(bodyParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define routes
app.use("/api/auth",authRoutes);
app.use('/api/carbon', carbonRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.get('/', (req, res) => res.send('Green Living Guide API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
