const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://testUser:test123@cluster0.pfxrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true });

async function callMongo() {
  await client.connect();

  //await listDatabases();

  const airBnbCollection = client.db('sample_airbnb').collection('listingsAndReviews');
  //await showListings(airBnbCollection);

  showOneListing(airBnbCollection, 'PETIT HOUSE');
}

async function asyncForEach(array, callback) {
  for(let i = 0; i < array.length; i++) {
    await callback(array[i]);
  }
}

async function listDatabases() {
  const results = await client.db().admin().listDatabases();

  //results.databases.forEach(async db => {
  asyncForEach(results.databases, async db => {
    console.log(`database: ${db.name}`);

    const collections = await client.db(db.name).listCollections().toArray();
    collections.forEach((c, index) => {
      //console.log(`${db.name} - ${c.name}`);
      //console.log(`\t${index}) ${c.name}`);
      console.log(`\t${String.fromCharCode(index + 97)}) ${c.name}`);
    });
  });
}

async function showListings(collection) {
  const results = await collection.find();
  if(results) {
    results.forEach(r => {
      console.log(`${r.name} - ${r.summary}\n\n`);
    });
  }
}

async function showOneListing(collection, name) {
  const result = await collection.findOne({name: name});
  if (result) {
    console.log(`${result.name} - ${result.summary}\n\n`);
  }
}

callMongo().catch(e => console.error(e));

