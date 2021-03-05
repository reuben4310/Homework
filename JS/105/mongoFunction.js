function createDocuments(collection, numDocs) {
  const c = db[collection];
  for (let i = 0; i < numDocs; i++) {
    c.insertOne({ docNumber: i });
  }
}