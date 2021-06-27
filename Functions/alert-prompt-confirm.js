The Alert Box
      //JavaScript offers three types of popup boxes; the Alert, Prompt, and Confirm boxes.

      //An alert box is used when you want to ensure that information gets through to the user.
      //When an alert box pops up, the user must click OK to proceed.
      //The alert function takes a single parameter, which is the text displayed in the popup box.
      //Example:
alert("Do you really want to leave this page?"); 

      //To display line breaks within a popup box, use a backslash followed by the character n.
alert("Hello\nHow are you?");

      //Be careful when using alert boxes, 
      //as the user can continue using the page only after clicking OK.

      //Example: infinitive spammer
do{
    alert("Do you really want to leave this page?"); 
}
while (1!=2) //1 != 2 will always has value "true" that's why it run infinitely
  
  
Prompt Box
      //A prompt box is often used to have the user input a value before entering a page.
      //When a prompt box pops up, 
      //the user will have to click either OK or Cancel to proceed after entering the input value.
      //If the user clicks OK, the box returns the input value. 
      //If the user clicks Cancel, the box returns null.

      /*
      The prompt() method takes two parameters.
      - The first is the label, which you want to display in the text box.
      - The second is a default string to display in the text box (optional).
      */

      //Example:
var user = prompt("Please enter your name");
alert(user);

      //When a prompt box pops up, 
      //the user will have to click either "OK" or "Cancel" to proceed after entering an input value. 
      //Do not overuse this method, 
      //because it prevents the user from accessing other parts of the page until the box is closed.

      //Example:
var user = prompt("Please enter your name");
if (user != false ) //if prompt is empty, the return will be false. 
{
    alert(user);
} 
else 
{
    alert("No content");
}


      //Example:
var b = "*****"; 
var password = prompt("Enter password pls", b); 
if(password==12345){ 
  alert("Access Granted!"); } 
else{ 
  alert("Access Denied!"); }

      //Example:
//password register begins here!
function password(user){
   var a=user;
   alert('your password have been saved as '+a);
    return a;
}
var a=password(prompt('enter your password'));
alert("registration successfull\n Do you want to procceed to LogIn?\n Click Ok!")

//LogIn begins here
alert("click ok to LogIn")
var password = prompt("Enter password plz");
if(password===a){
  alert("Access granted!");
}
else{
  alert("invalid credential!");
}


      //Example: to obtain the name of the user and alert it to the screen:
var name = prompt("Enter your name:");
alert(name);


Confirm Box
      //A confirm box is often used to have the user verify or accept something.
      //When a confirm box pops up, the user must click either OK or Cancel to proceed.
      //If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.

      //Example:
var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}    //Do not overuse this method, 
     //because it also prevents the user from accessing other parts of the page until the box is closed.


