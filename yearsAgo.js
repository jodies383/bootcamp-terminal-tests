module.exports = function(date) {
  var todaysDate = new Date();
  var addDate = todaysDate.getFullYear() - date;
 
  return addDate;
}