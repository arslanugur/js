Trip Planner
      You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
      Given a distance in miles as input (the code to take input is already present), 
      output to the console the time it will take you to cover it in minutes.

Sample Input:
100, 150, 590
Sample Output:
150, 225, 885

      node.js Code:
function main() {
    var distance = parseInt(readLine(), 10);
    //your code goes here
    var minutes = distance / 40 * 60;
    console.log(minutes);
}

      Explanation: It will take 150/40 = 3.75 hours to cover the distance, which is equivalent to 3.75*60 = 225 minutes. 
      
      
      
      
      
      
