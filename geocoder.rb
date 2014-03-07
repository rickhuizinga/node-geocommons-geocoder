#!/usr/bin/env ruby

require "rubygems"
require "geocoder/us"
require "json"

if ARGV.length != 3
STDOUT.puts <<-EOF
Usage:
  geocoder <options> <address>
  
  options:
    -db <database>, the location of the geocoder database file
EOF
else
  db = Geocoder::US::Database.new(ARGV[1])
  STDOUT.puts JSON.generate(db.geocode(ARGV[2]))
end