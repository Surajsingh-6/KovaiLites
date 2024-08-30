import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  console.log('GET /api/get-images');
  try {
    console.log('Connecting to database...');
    const client = await clientPromise;
    console.log('Connected to database.');

    const db = client.db();
    const imagesCollection = db.collection('images');

    console.log('Fetching images...');
    const images = await imagesCollection.find({}).toArray();
    console.log('Fetched images:', images);
    res.status(200).json({ success: true, images });
  } catch (error) {
    console.error('GET /api/get-images error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
}
