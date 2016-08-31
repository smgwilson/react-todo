var moment = require('moment');

console.log(moment().format());

// January 1st, 1970 @a12:00am -> 0
// January 1st, 1970 @a12:01am -> 1

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1472597524;

var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
