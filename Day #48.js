// Human readable duration format
/*
Your task is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
*/

// Test Cases
formatDuration(1); // should return "1 second"
formatDuration(3662); // should return "1 hour, 1 minute and 2 seconds"
formatDuration(62); // should return "1 minute and 2 seconds"
