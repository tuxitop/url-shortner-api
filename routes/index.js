/* jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const Url = require("../models/urls");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:shortid', (req, res, next) => {
    Url.findOne({_id: req.params.shortid}, (err, url) => {
        if (err) {
            return next(err);
        }
        if (!url) {
            res.status(400).send({
                error: "This URL is not found in the database"
            });
            return;
        }
        res.redirect(url.redirect);
    });
});

router.get(/\/new\/(.+)/, (req, res, next) => {
    let newUrl = new Url( {
        redirect: req.params[0]
    });
    console.log(req.params[0]);

    newUrl.save((err) => {
        if (err) {
            res.status(400).send({
                error: err.errors.redirect ? err.errors.redirect.message : "Something happened!"
            });
            return;
        }
        res.send({
            original_url: newUrl.redirect,
            short_url: req.get('host') + "/" + newUrl._id
        });
    });
});

module.exports = router;
