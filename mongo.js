const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://mongodb:27017');
await client.connect();
const db = client.db('ecommerce');
const collection = db.collection('products');
// Create
await collection.insertOne({ name: 'Product1', price: 100 });
// Read
const product = await collection.findOne({ name: 'Product1' });
// Update
await collection.updateOne({ name: 'Product1' }, { $set: { price: 200 } });
// Delete
await collection.deleteOne({ name: 'Product1' });
