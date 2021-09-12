The Date Object

setInterval
      //The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
      //It will continue calling the function until clearInterval() is called or the window is closed.

//For example:
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);
      //This will call the myAlert function every 3 seconds (1000 ms = 1 second). 
      //Write the name of the function without parentheses when passing it into the setInterval method. 

//to call the function "calc()" every 2 seconds:
setInterval(calc, 2000);

setInterval(calc, 1000); //Every One Second // 1000 millisecond = 1 second
setInterval (calc, 1000*60); //Every One Minute 
setInterval(calc, 1000*60*60); //Every One Hour 



The Date Object
      //The Date object enables us to work with dates.
      //A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
      //Using new Date(), create a new date object with the current date and time

var d = new Date(); //d stores the current date and time

      //The other ways to initialize dates allow for the creation of new date objects from the specified date and time
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

      //JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC).
      //One day contains 86,400,000 millisecond.
//Fri Jan 02 1970 00:00:00

var d1 = new Date(86400000); 
//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");
//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

      //JavaScript counts months from 0 to 11. January is 0, and December is 11.
      //Date objects are static, rather than dynamic. 
      //The computer time is ticking, but date objects don't change, once created.

      //88,5,11,11 88 = 19(88); 5 = june because month starts with ( 0=Jan) in JS; 11 = 11th of month; 11 = time(hour)

      /*Another important factor is how different browsers respond to new Date(). 
        Firefox returns local time while Chrome returns UTC time 
        and appends the Zulu timezone market to the end of the datetime string. 
        This can cause headaches when trying to display a date or time cross browser. 
        Browsers now support the parameters for toLocaleString 
        so you can do: new Date().toLocaleString('en-US', {timeZone: 'America/Houston'}); 
        or new Date().toLocaleString('en-GB', {timeZone: 'Europe/London'}); */

      //https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

var today =new Date();
var dd = today.getDate();
var yyyy = today.getFullYear();
var mm = today.getMonth();
var month = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];

today=dd+' '+month[mm]+' '+yyyy;
document.write(today);

      //What information results from creating a Date Object? --> The current date and time

      //When a Date object is created, a number of methods make it possible to perform operations on it. 
Method | Description
--------------------
getFullYear() | gets the year
getMonth()    | gets the month
getDate()     | gets the day of the month
getHours()    | gets the hour
getMinutes()  | gets the minutes
getSeconds()  | gets the seconds
getMilliseconds() | gets the milliseconds

//For example:
var d = new Date();
var hours = d.getHours();

document.write(hours);

      //**Let's create a program that prints the current time to the browser once every second.
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);    //Output: Current time

      //We declared a function printTime(), which gets the current time from the date object, and prints it to the screen.
      //We then called the function once every second, using the setInterval method. 

      //The innerHTML property sets or returns the HTML content of an element.
      //In our case, we are changing the HTML content of our document's body. 
      //This overwrites the content every second, instead of printing it repeatedly to the screen.

      //how to add leading zeros 00:00:01 
      //https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
function addZero(x){ 
  return x < 10 ? "0"+String(x) : String(x); } 
function printTime() { 
  var d = new Date(); //to initialize a date object representing the current date and time:
  var hours = addZero(d.getHours()); 
  var mins = addZero(d.getMinutes()); 
  var secs = addZero(d.getSeconds()); 
  document.body.innerHTML = hours+":"+mins+":"+secs; } 

setInterval(printTime, 1000);




