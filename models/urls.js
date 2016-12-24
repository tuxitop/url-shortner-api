/* jshint esversion: 6 */
const mongoose = require('mongoose');
const validator = require('validator');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const urlSchema = new Schema({
    _id: { 
        type: String,
        default: shortid.generate()
    },
    redirect: { 
        type: String,
        required: true, 
        validate: [ (v) => validator.isURL(v, {require_protocol: true}),
                    'you should use a valid URL with a valid protocol' ] 
    }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
