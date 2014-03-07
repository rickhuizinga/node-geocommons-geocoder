var path = require("path"),
  child_process = require("child_process");

exports.geocode = function(database, address, callback) {
  var child = child_process.execFile("ruby", [ path.join(__dirname, "geocoder.rb"), "-db", database, address ], function(error, stdout, stderr) {
    try {
      if (error) return callback(err);
      
      var results = JSON.parse(stdout);
      callback(null, results);
    } catch (err) {
      callback(err);
    }
  });  
};