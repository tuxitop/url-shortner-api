/* jshint esversion: 6 */
const expect = require("chai").expect;
const Url = require('../models/urls');

describe("Url", () => {
    it("should be invalid if url is empty", (done) => {
        let url = new Url();

        url.validate((err) => {
            expect(err.errors.redirect).to.exist;
            done();
        })
    })

    it("should be invalid for alimsvi.com", (done) => {
        let url = new Url({
            redirect: "alimsvi.ir"
        });
        url.validate((err) => {
            expect(err).to.exist;
            done();
        });
    });

    it("should be valid for https://alimsvi.com", (done) => {
        let url = new Url({
            redirect: "https://alimsvi.ir"
        });
        url.validate((err) => {
            expect(err).to.not.exist;
            done();
        });
    });
});
