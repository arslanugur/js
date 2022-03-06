Break
      //We've met the break statement earlier in this module, 
      //we use it to "jump out" of a loop and continue executing the code after the loop.

      //Like this:
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        break; 
    }
    document.write(i + "<br />");
}
/*output: 0
          1
          ..
          4 */

      //You can use the return keyword to return some value immediately from the loop inside of a function. 
      //This will also break the loop.
      
      /*Difference between break and continue statement is 
                that break will terminate the loop 
                and continue will skip the certain value*/
      //Break --> interrupt
      //Continue --> skip
      
      //Example:
for (i=0;i <=5;i++){ 
  if (i==3){ 
    break;} 
    document.write(i+"");} //result: 0 1 2 

      //Example:
for (i=0;i <=5;i++){ 
  if (i==3){ 
    continue ;} 
    document.write(i+"");} //result: 0 1 2 4 5
    


      //Statement execution 
for (i = 0; i <= 10; i++) 
    if (i == 5) {
        continue; 
    }
    document.write(i + "<br />");
      
      // Block execution 
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}


      //note that "break" breaks only from one loop. 
for(x = 0; x < 3; x++) { 
for (i = 0; i <= 10; i++) { 
if (i == 5) { 
  break; } 
  document.write(i + ""); } } //output: 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4


      //The "break" statement ends the execution of the loop


Continue
      //We're nearly done with module 3! One last thing to cover.

      //Unlike the break statement, 
      //the continue statement breaks only one iteration in the loop, 
      //and continues with the next iteration.

      //Like this:
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}
/* output: 0
           1
           ..
           9
           10 */

      //The value 5 is not printed, because continue skips that iteration of the loop.
      
      //Example:
var sum = 0 
for (i = 4; i <= 8; i++) { 
  if (i == 6) { 
    continue; } 
    sum += i; } 
    document.write(sum);

      //What’s the output of this code?
var sum=0; 
for(i=4; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  sum += i;
}
document.write(sum); //output: 16

/*
Note: # (sum += i) implies sum=sum + i 
      # if i equals 6, it skips the loop and moves to the next one. 
      # (continue) implies (skip) 
      # i and “sum” stores the result in a loop and uses it in the next. 
      ======= 1ST LOOP ======= loop#1 sum=0 i=4 sum=0+4=4 
      i = 4 is (i < 8) ? ====> YES. 
      if i equals 6, skip. 
      But i ≠ 6 sum = 0 + 4. Hence, sum = 4. i++ implies 4 + 1 = 5. Hence, i = 5. 
      ======= 2ND LOOP ======= loop#2 sum=4 i=5 sum=4+5=9 
      i = 5 is (i < 8) ? ====> YES 
      if i equals 6, skip. 
      But i ≠ 6 sum = 4 + 5. Hence, sum = 9. i++ implies 5 + 1 = 6. Hence, i = 6.
      ======= 3RD LOOP ======= loop#3 sum=9 i=6 continue (skip) 
      i = 6 is (i < 8) ? ====> YES 
      if i equals 6, skip. (i equals 6)YES [Hence, skip this loop.] 
      ======= 4TH LOOP ======= loop#4 sum=9 i=7 sum=9+7=16 
      i = 7 is (i < 8) ? ====> YES 
      if i equals 6, skip. 
      But i ≠ 6 sum = 9 + 7. Hence, sum = 16. i++ implies 7+ 1 = 8. Hence, i = 8. 
      ======= 5TH LOOP ======= loop#5 sum=16 i=8 quit
      i = 8 is (i < 8) ? ====> NO [Hence, Loop ends.] 
      After loop ends display; 
      (sum) document.write(sum) which equals 16. 
      */

/*
At first sum = 0 and i = 4 
    then sum = 4 and i = 5 here sum becomes sum=9 
    then sum=9 and i=6 
    here since i is 6 this gets skipped 
    so sum will be same here as sum=9 then sum=9 and i=7 
    here sum will becomes sum=16 
*/




