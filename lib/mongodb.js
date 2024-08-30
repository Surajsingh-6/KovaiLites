import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;  // The MongoDB connection string from your environment variables
let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not recreated on every request
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect()
      .then(() => {
        console.log('Connected to MongoDB in development mode');
      })
      .catch(err => {
        console.error('Failed to connect to MongoDB in development mode:', err);
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's okay to create a new MongoClient instance
  client = new MongoClient(uri);
  clientPromise = client.connect()
    .then(() => {
      console.log('Connected to MongoDB in production mode');
    })
    .catch(err => {
      console.error('Failed to connect to MongoDB in production mode:', err);
    });
}

export default clientPromise;
