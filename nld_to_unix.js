module.exports = {
  //  Precondition: 
  //    Argument is a string in "Natural Language Date" format (i.e. 'January 20, 2017')
  //  Postcondition:
  //    Returns unix time, in seconds
  doConvert: function(dateStr) {
        //  Split our input
        var dateSplit = dateStr.split(' ');

        //  Shorten the month name, i.e. January -> Jan
        //  Why: in order to parse as per: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
        dateSplit[0] = dateSplit[0].slice(0,3);

        //  Declare a new date
        var d = new Date();

        //  Parse our shortened-month string and assign to date
        d.setTime(Date.parse(dateSplit.join(' ')));

        //  Since it's in milliseconds, divide by 1000 for seconds
        return d.getTime()/1000
  }
}