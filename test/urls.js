/* jshint esversion: 6 */
const expect = require("chai").expect;
const Url = require('../models/urls');

describe("Url", () => {
    it("should be invalid if url is empty", (done) => {
        let url = new Url();

        url.validate((err) => {
            expect(err.errors.redirect).to.exist;
            expect(err.errors._id).to.exist;
            done();
        })
    })

    it("should be invalid for invalid _id", (done) => {
        let url = new Url( {
            _id: "Hey",
            redirect: "http://www.alimsvi.com"
        } );

        url.validate((err) => {
            expect(err.errors._id).to.exist;
            expect(err.errors.redirect).to.not.exist;
            done();
        });
    });

    it("should be valid for alimsvi.com", (done) => {
        let url = new Url({
            _id: 12,
            redirect: "alimsvi.ir"
        });
        url.validate((err) => {
            expect(err).to.not.exist;
            done();
        });
    });

    it("should be valid for https://alimsvi.com", (done) => {
        let url = new Url({
            _id: 51,
            redirect: "https://alimsvi.ir"
        });
        url.validate((err) => {
            expect(err).to.not.exist;
            done();
        });
    });
});
