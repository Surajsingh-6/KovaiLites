// pages/api/test-mongo.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await db.collection('test').find({}).toArray();

    res.status(200).json({ success: true, data });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Could not connect to the database' });
  }
}
