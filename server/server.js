const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user");
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});


// authenticated routes 
app.use("/api/auth", authRoutes);


// app.use("/api/profile", require("./routes/profile"));
app.use("/api/profile", profileRoutes);
app.use("/api/posts", require("./routes/skillPost"));

// app.use("api/profile",require("./routes/profile"));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
