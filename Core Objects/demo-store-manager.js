Store Manager

      /*You are working on a Store Manager program, which stores the prices in an array.
        You need to add functionality to increase the prices by the given amount.
        The increase variable is taken from user input. 
        You need to increase all the prices in the given array by that amount and output to the console the resulting array.

        Use a loop to iterate through the array and increase all items.*/

      //Code:
function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //the code goes down here
    for (i=0; i<=3; i++) {
    	prices[i] = prices[i] + increase;    	
    }
console.log(prices);    
}
      //input: 9, output:[ 107.99, 24.2, 29, 1035 ]
      //input: 100, output:[ 198.99, 115.2, 120, 1126 ]



