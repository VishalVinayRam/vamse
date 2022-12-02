const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alienSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  native_planet: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
  },
  bio:
  {
    type: String,
    required: true,
    default: 'I am new to earth',
  } 
},{timestamp:true},);

module.exports = mongoose.model('Alien', alienSchema);
