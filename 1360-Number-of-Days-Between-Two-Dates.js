/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

    const dateObj1 = new Date(date1).getTime();
    const dateObj2 = new Date(date2).getTime();

     // Calculate the difference in milliseconds
    const diffMilliseconds = Math.abs(dateObj1 - dateObj2);

    // Convert milliseconds to days
    const diffDays = Math.floor(diffMilliseconds / oneDay);

    return diffDays
};