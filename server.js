const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
// const compression = require("compression");
const router = require('./routes/api.js')

const app = express();
const PORT = process.env.PORT || 3001;

const { transaction } = require('./models/transaction');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(router)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
