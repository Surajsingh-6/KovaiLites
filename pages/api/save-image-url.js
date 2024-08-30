// pages/api/save-image-url.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { imageUrl, title, keywords, category } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db();
    const imagesCollection = db.collection('images');

    const newImage = {
      imageUrl,
      title,
      keywords: keywords.split(',').map(keyword => keyword.trim()), // Store keywords as an array
      category,
    };

    await imagesCollection.insertOne(newImage);

    res.status(200).json({ success: true, image: newImage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
