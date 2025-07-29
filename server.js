const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/soil-data", (req, res) => {
  const simulatedData = {
    moisture: Math.floor(Math.random() * 100),
    ph: (5 + Math.random() * 3).toFixed(2),
    nitrogen: Math.floor(Math.random() * 100),
    temperature: Math.floor(20 + Math.random() * 15),
    timestamp: new Date(),
  };
  res.json(simulatedData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
