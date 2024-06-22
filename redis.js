const redis = require('redis');
const client = redis.createClient();
client.set('product:1', JSON.stringify({ name: 'Product1', price: 100 }));
client.get('product:1', (err, reply) => {
  console.log(JSON.parse(reply));
});
client.del('product:1');
