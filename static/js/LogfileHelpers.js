//LogfileHelpers module
/*
This module contains functions that help filter lists of logfiles.
This module should be imported and used by the LogPuller class to filter log file names.
*/
module.exports = {
  log_less_than_max: function (filename, max){
  //@param {String} filename – Valid logfile name.
  //@param {int} max – optional maximum lognum that's acceptable. Reject if log exceeds max
  //@return {bool} – True if this logfile is less than max
  //If only one '.' in log, we definitely want it (it's the first log)
  if (max){
    if(!filename.includes('.', filename.indexOf('.') + 1)){
      return true;
    } else {
      //Pull the number off the end and compare it
      var log_num = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
      log_num = parseInt(log_num);
      if (!(log_num> max)){
        return true;
      }
    };
    return false;
  } else {
    return true;
  }
},

  is_logfile: function(name){
    //@param {String} name – filename
    //@return {bool} -
    //If the file is a logfile, return true. If not (like if it's a dir), return false
      if (name.includes('log') && name.indexOf('.') > 0){
        return true;
      } else {
        return false;
      };
  }
};

if (require.main === module){
  console.log(is_logfile('shotlog.5'));
  console.log(log_less_than_max('shotlog.log.2',3));
};