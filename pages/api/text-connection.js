// pages/api/test-connection.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();
    res.status(200).json({ success: true, message: 'MongoDB connection successful!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
