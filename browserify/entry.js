var dep = require('./dep'),
    _ = require('underscore');

var uppers = _.map(dep, function (str) {
    return str.toUpperCase();
})

console.log(uppers); 