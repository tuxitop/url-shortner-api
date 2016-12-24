/* jshint esversion: 6 */
const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const urlSchema = new Schema({
    _id: { type: Number,
           required: true,
           unique: true },
    redirect: { type: String,
                required: true, 
                validate: [validator.isURL , 'you should use a valid URL' ]  }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
