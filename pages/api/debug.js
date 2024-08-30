// pages/api/debug-env.js
export default function handler(req, res) {
    console.log("Working with Mongo URI:", process.env.MONGODB_URI);
    res.status(200).json({ mongoUri: process.env.MONGODB_URI });
  }
  