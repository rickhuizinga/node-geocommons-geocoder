node-geocoder
=============

Node.js wrapper for calling the geocommons/geocoder Ruby interface 

# Dependencies
A working ruby installation is required with the json and geocoder/us GEMs installed and available.

For the geocoder/us GEM, follow the build and installation instructions in geocommons/geocoder

# API Documentation

## geocode(database : String, address : String, callback : function)

Asynchronously parse and geocode `address`.
```javascript
	var geocoder = require('node-geocoder');
	geocoder.geocode("/opt/tiger/geocoder2012.db", "12 Seahawks Way, Renton, WA, 98056", function(err, results) {
	  if (err) {
	    console.log(err.message);
	  } else {
	    console.log(JSON.stringify(results));
	  }
	});
```
Output:
	
	[{"precision":"zip","city":"Renton","score":0.603,"fips_county":"53033","lon":-122.186447,"zip":"98056","lat":47.514671,"state":"WA"}]
