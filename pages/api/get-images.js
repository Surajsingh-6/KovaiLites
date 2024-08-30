// pages/api/get-images.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const imagesCollection = db.collection('images');

    const images = await imagesCollection.find({}).toArray();
    console.log('Fetched images:', images);
    res.status(200).json({ success: true, images });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
