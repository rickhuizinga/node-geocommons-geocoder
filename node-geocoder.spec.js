var assert = require("assert");
var should = require("should");
var geocoder = require("./node-geocoder.js");

describe("Should not produce an error", function() {
  it("should not generate an error indicative of missing dependencies", function(done) {
    geocoder.geocode("/opt/tiger/geocoder2012.db", "12 Seahawks Way, Renton, WA 98056", function(err, results) {
      if (err) {
        done(new Error("dependencies are missing"));
      } else {
        done();
      }
    });
  });
});