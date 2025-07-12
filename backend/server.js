// File: backend/server.js
const express = require("express");
const cors = require("cors");
const users = require("./users");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Login API route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
