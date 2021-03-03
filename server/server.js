const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');
app.use(parser.json());
const cors = require('cors');
app.use(cors());


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('bookings_hub');
    const bookingsCollection = db.collection('bookings') 
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
})
.catch(console.error);

app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
