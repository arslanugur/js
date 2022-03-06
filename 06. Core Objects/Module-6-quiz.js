      //to be alerted with "apple"
var fruits = new Array("pear", "orange",
"apple", "grapefruit");
alert(fruits[2]); //array starts to 0. [0]-pear [1]-orange [2]-apple [3] grapefruit

      //to output the current minutes:
var date = new Date();
alert(date.getMinutes());


      //Example
var arr = new Array("a", "b", "c"); 

alert(arr[1]); //b

      //to get alerted with the value of the PI constant.
alert(Math.PI);

      

      //Calculator
var num1;
var num2;

var input = prompt("What do you want to do? \n plus = + \n minus = - \n multiply = * \n divide = / \n square root = .");
if (input == "+") {
    num1 = prompt("Please input your first number:");
    num2 = prompt(num1 + " +");
    var ans = parseFloat(num1) + parseFloat(num2);

    document.write(num1 + " + " + num2 + " = " + ans);
}

if (input == "-") {
    num1 = prompt("Please input your first number:");
    num2 = prompt(num1 + " -");
    var ans = parseFloat(num1) - parseFloat(num2);

    document.write(num1 + " - " + num2 + " = " + ans);
}

if (input == "*") {
    num1 = prompt("Please input your first number:");
    num2 = prompt(num1 + " x");
    var ans = parseFloat(num1) * parseFloat(num2);

    document.write(num1 + " x " + num2 + " = " + ans);
}

if (input == "/") {
    num1 = prompt("Please input your first number:");
    num2 = prompt(num1 + " /");
    var ans = parseFloat(num1) / parseFloat(num2);

    document.write(num1 + " / " + num2 + " = " + ans);
}

if (input == ".") {
    num1 = prompt("Please input your number:");

    var ans = Math.sqrt(num1);

    document.write("The square root of " + num1 + " is " + ans);
}





