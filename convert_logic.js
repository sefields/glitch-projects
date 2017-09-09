var strftime = require('strftime');

module.exports = {
  //  Precondition: 
  //    Argument is a string in "Natural Language Date" format (i.e. 'January 20, 2017')
  //  Postcondition:
  //    Returns unix time, in seconds
  //  Why:
  //    This is enough logic to be its own function. It's only purpose is to be called
  //    in do_Convert below.
  nld_to_unix: function(dateStr) {
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
  },
  
  doConvert: function(dateArg) {
    var resultObj = {
      unix: null, 
      natural: null
    }
    
    var natDateExp = /\b[A-z]{3,9}\b [0-9]{1,2}, [0-9]{4}/; //RegEx for a natural date format
    
    var unixDate = parseInt(dateArg); // Attempt to convert input to an integer
  
    //  If it worked, we assume it's in Unix time
    if (!isNaN(unixDate)) {
      resultObj.unix = unixDate;
      resultObj.natural = strftime('%B %d, %Y', new Date(unixDate*1000));
    }
    //  Otherwise, check if input is a natural date using regex
    else if (natDateExp.test(dateArg)) {
      resultObj.unix = this.nld_to_unix(dateArg);
      resultObj.natural = dateArg;
    }
    //  If original 'null' object is returned, inputs were not valid.
    return resultObj;
  }
}