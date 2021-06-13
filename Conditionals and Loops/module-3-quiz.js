      //What’s the output of this code?
var x = 0;      //the initial value of 'x'
while(x<6) {    //the condition
  x++;          //the iteration, x increases by 1 each time x <6
}
document.write(x);

      //This is 6 because x++ is used after while checks its value. 
      //So as we hit 5 while says well we are still lower than 6 so I will just keep going. 
      //Then x++ comes along and turns 5 into 6. 
      //So now that while checks again and says hey this is not less than 6. 
      //It's equal to 6. I must be done. document.write(x);
      
      //Situation1 var x = 0; while(x<6) { document.write(x); x++; } Output => 012345 
      //Situation2 var x = 0; while(x<6) { x++; document.write(x); } Output => 123456 
      //Situation3 var x = 0; while(x<6) { x++; } document.write(x); Output => 6
      
      //Example:
switch (day_of_week) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    document.write("Working Days");   
      break;
  case 6:
    document.write("Saturday");   
      break;
  default:
    document.write("Today is Sunday");
      break;
}

      //Example:
function judge(){ 
  return 3 } 
var day = 3; 
  switch (day) { 
    case 1: 
      document.write("Monday"); 
        break; 
    case 2: 
      document.write("Tuesday"); 
        break; 
    case judge(): 
      document.write("Wednesday"); 
        break; 
    default: 
      document.write("Another day"); } //result: Wednesday
      
      //Example:
do {
   document.write(i);
    i++;
}
while (i < 10);

