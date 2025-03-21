const express = require('express');
const cors = require('cors');
const { firebaseApp, connectToDb } = require('./config/firebase');

const db = connectToDb();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Firebase Backend API is running');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = { app, db };