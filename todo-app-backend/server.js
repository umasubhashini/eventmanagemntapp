const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');  // Import authentication routes

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());  // For parsing incoming JSON
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Connect to MongoDB
mongoose.connect('mongodb+srv://ubhashiniravuri:lRL79v4k2qhHlToG@cluster0.g1ddp.mongodb.net/',);
const con = mongoose.connection;
con.once("open", () => {
  console.log("Mongo DB connected");
});

// Use authentication routes
app.use('/api/auth', authRoutes);
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
