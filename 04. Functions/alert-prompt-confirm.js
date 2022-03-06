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

     //In the "confirm" dialog box, "OK" returns true, and "Cancel" returns false

     //Example:
var result = confirm("Do you think coding is easy?"); 
if (result == true) { 
    alert("Easy"); } 
else { 
    alert("Hard"); }


     //Example:
// creating a function that will greet a user once our conditions in our if block return true 
//and pops a message if whether he wanna leave the page.
function welcome (name)
{
 var name = prompt ("enter your name");
    alert("welcome "+ name );
    var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}
   }  
    
var checkAge = prompt("enter your age");

//checking the input age by outputting a message if age is less than 18
if(checkAge <18)
{
    alert ("you must be at least 18 years old");
}
else
{//calling our function once checkage return true
    welcome("kennedy");    
}



      //HTML Code:
<!DOCTYPE html>
<html>
	<head>
		<title>Alert, Prompt and Confirm functions in JS!</title>
		<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	</head>
	<body>
		<h1>Alert, prompt, and confirm functions in JS</h1>
		<h3>Alert</h3>
		<p>Alert function will show a message for the user and they have to click <em>ok</em> to proceed.</p>
		<h3>Prompt</h3>
		<p>Prompt function in JS takes two parameters (second one is optional) and depending if the user filled out the bar or clicked cancel it will send different result to the user. Prompt function in this case returned the value that you have put, because in JS section below the prompt function was put <em>alert(test)</em> which is function that will return your input and test is the name of the prompt function. If you clicked cancel, null will be returned.</p>
		<h3>Confirm</h3>
		<p>Confirm function in JS will have 2 options for the user to choose typically either ok or cancel, and depending which two of them you choose JS will send different results to the user.</p>
	</body>
</html>


     //CSS Code:
body {
	font-family:Roboto;
}

     //JS Code:
alert("This is the alert function");

var test = prompt ("Please enter something");
alert(test);

var test2 = confirm ("Press ok to choose a, or cancel to choose b"); 

    if (test2 === true) {
    alert("You choose a");
}

else {
    alert("You choose b");
}


      //Example:
      //HTML Code:
<!doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
    </head>
  
    <body>
        <div id="test" style="display: none; background: royalblue; color: gainsboro; padding: 10px;"> 
          This code  demonstrates a slight alternative (usually called modals) 
          to the "Confirm" and "Alert" dialog boxes in JavaScript.
          It gives a way to kinda by-pass the in-built <i>"Prevent this page 
          from creating additional dialogues"</i> functionality in browsers in a
          case where a user triggers/activates it. And the modal title/name can also be
          customized instead of the, again, in-built, constant titles/names...<i>"JavaScript Confirm"</i> or 
          <i>"JavaScript Application"</i> and <i>"JavaScript Alert"</i> or...etc.
          <br /><br />
          PS: You may include it in pages/apps you'll be creating. See documentation 
          in code to understand how it works. And just as the <code>alert()</code> and <code>confirm()</code> functions, 
          the modal function can also be called for testing, like, <code>modal()</code>, without params.
          <br /><br />
          Do upvote if you like it. Thanks. :) 
          <br /><br />
          Some content... Some content... And some more content like, lorem ipsum dolor foo bar baz... ;)
          <br /><br />
          <button id="delete">Delete This Message</button>
        </div>
        <!-- The Modal -->
        <div id="modal-container">
            <div id="modal">
                    <header id="modal-header">
                        <span id="modal-name">My Confirm</span> 
                    <span id="modal-action"></span>
                </header>
                <div id="modal-message"></div>
                <div id="modal-buttons-wrapper">
                    <button id="modal-yes">YES</button>
                    <button id="modal-no">N0</button>
                </div>
            </div>
        </div>    
    </body>
</html>

      //CSS code:
html, body
{ 
      margin: 0; 
      height: 100%;
}
            
* { box-sizing: border-box; }
#modal-container
{
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.7);
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      justify-content: center;
      opacity: 0;
      z-index: 7; 
      font-size: 15px;
      -webkit-transition: opacity 0.2s;
      -moz-transition: opacity 0.2s;
      -ms-transition: opacity 0.2s;
      -o-transition: opacity 0.2s;
      transition: opacity 0.2s;
}
                
      #modal 
      {
      width: 380px; 
      align-self: center;
      height: auto;
      max-width: 85%;
      background: #eee;
      border-radius: 90px; 
      overflow: hidden;
      color: #181818;
      line-height: 140%;
      opacity: 0;
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
      -webkit-transition: 0.15s;
      -moz-transition: 0.15s;
      -ms-transition: 0.15s;
      -o-transition: 0.15s;
      transition: 0.15s; 
      }
      
      #modal header
      {
      font-size: 125%;
      font-weight: bold;
      max-height: 56px;
      padding: 10px 20px 6px 20px;
      background: inherit;
      overflow: hidden; 
      line-height: 200%;
      border-radius: inherit;
      }
      
      #modal-action
      { 
      font-size: 87%;
      font-weight: normal; 
      }
      
      #modal-message
      { 
      color: #505050;
      overflow-y: auto;
      height: auto;
      width: 100%;
      padding: 0 20px;
      padding-bottom: 15px;
      font-family: inherit;
      font-size: inherit;
      white-space: pre-wrap;
      }
      
      #modal-buttons-wrapper 
      { 
      text-align: right;
      padding: 11px; 
      background: inherit;
      width: 100%;
      border-radius: inherit; 
      }
      
      #modal button
      {
      padding: 6px;
      width: 70px;
      background: #d6d6d6;
      border: none;
      margin: 0;
      border-radius: 3px;
      color: #222;
      }
      
      #modal button:hover
      { background: #555; }
      
      button#modal-yes
      { 
      margin-right: 8px; 
      color: #f00; 
      }
      
      button#modal-no
      { color: royalblue; }



      //JS Code:
var ID = document.getElementById.bind(document);


this.onload = function()
{
    //Welcome
    modal("Hi, there. Thanks for checking out my code. Click \"OK\" to continue. :)", "Welcome", "", 0, displayMessage);
    
    
    
    function displayMessage()
    { ID("test").style.display = "block"; };



    //Shows shadow inside modal if message text is long
    function modalMessageBoxShadow()
    {
        if (ID("modal-message").scrollHeight > ID("modal-message").offsetHeight)
            ID("modal-header").style.boxShadow = "0 4px 6px #c8c8c8",
            ID("modal-buttons-wrapper").style.boxShadow = "0 -4px 6px #c8c8c8",
            ID("modal-message").style.padding = "18px 20px";
        else
            ID("modal-header").style.boxShadow = "",
            ID("modal-buttons-wrapper").style.boxShadow = "",
            ID("modal-message").style.padding = "0 20px 15px 20px";
        ID("modal-message").style.maxHeight = (window.innerHeight-140) + "px";
    }
    
    
    
    //Open modal function
    function openModal(modalMessage, actionTitle, modalName, modalType)
    {
        ID("modal-name").innerText = modalName ? (modalName + " -"):(modalType == 1 ? (actionTitle ? "Confirm -":"Confirm"):(actionTitle ? "Alert! -":"Alert!"));
        ID("modal-action").innerText = actionTitle ? actionTitle:"";
        ID("modal-message").innerText = modalMessage ? modalMessage:"";
        ID("modal-container").style.display = "flex";
        var modalTypeIsConfirm = (modalType == 1 || modalType == 0) ? modalType:0;
        modalTypeIsConfirm = modalMessage ? modalTypeIsConfirm:0;
        modalMessageBoxShadow();
        setTimeout(function()
        {
            ID("modal-container").style.opacity = "1";
            setTimeout(function() 
            { 
                ID("modal").style.opacity = "1"; 
                ID("modal").style.WebkitTransform = "scale(1)";
                ID("modal").style.MozTransform = "scale(1)";
                ID("modal").style.MsTransform = "scale(1)";
                ID("modal").style.OTransform = "scale(1)";
                ID("modal").style.transform = "scale(1)";
                ID("modal").style.borderRadius = "4px";
            }, 100);
        }, 50);

        if (modalTypeIsConfirm)
        {
            ID("modal-yes").style.display = "inline",
            ID("modal-no").innerHTML = "NO";
            return true;
        }
        ID("modal-yes").style.display = "none";
        ID("modal-no").innerHTML = "OK";
        return false;
    }
    
    
    
    //closeModal() function closes modal only iff the "YES" or "NO" button or the black transparent-bg is clicked
    function closeModal(e)
    {
        var userClickedYes;
        var event = e ? e:event; //Checks misbehaviour in Firefox
        if (event.target.id == "modal-container")
            close(), userClickedYes = false;
        else if (event.target.id == "modal-yes")
            close(), userClickedYes = true;
        else if (event.target.id == "modal-no")
            close(), userClickedYes = false;
            
        function close()
        {
            ID("modal").style.WebkitTransform = "scale(0)";
            ID("modal").style.MozTransform = "scale(0)";
            ID("modal").style.MsTransform = "scale(0)";
            ID("modal").style.OTransform = "scale(0)";
            ID("modal").style.transform = "scale(0)";
            ID("modal").style.opacity = "0";
            ID("modal").style.borderRadius = "90px";
            setTimeout(function() 
            {
                ID("modal-container").style.opacity = "0";
                setTimeout(function()
                { ID("modal-container").style.display = "none"; }, 100);
            }, 150);
        }
        return userClickedYes;
    }
    


    //The modal()
    function modal(modalMessage, actionTitle, modalName, modalType, takeAction)
    {
        if (modalMessage && typeof arguments[arguments.length-1] == "function")
            takeAction = arguments[arguments.length-1],
            modalType = (modalType == 1 || modalType == 0) ? modalType:1;
        else takeAction = null;
        modalMessage = modalMessage ? modalMessage:"";
        actionTitle = typeof actionTitle == "string" ? actionTitle:null;
        modalName = typeof modalName == "string" ? modalName:null;
        modalType = (modalType == 1 || modalType == 0) ? modalType:0; //"modalType == 1" is for "Confirm" while "modalType == 0" is for "Alert";
        if (arguments.length == 1)
            modalType = 0;
        //Ensures modal is not active/open before calling "openModal()" function to avoid clashes/misbehaviours
        var modalIsActive = ID("modal-container").style.display == "flex" ? true:false;
        if (!modalIsActive)
            openModal(modalMessage, actionTitle, modalName, modalType);
        
        var checking;
        //Onclick event handler to handle closing of modal
        ID("modal-container").onclick = function(e)
        {
            var modalTypeIsConfirm = modalType;
            var userClickedYes = closeModal(e);
            
            if (takeAction)
                if (modalTypeIsConfirm)
                    setTimeout(function()
                    { takeAction(userClickedYes); }, 150);
                else 
                    if (typeof userClickedYes == "boolean")
                        if (!userClickedYes)
                            setTimeout(function()
                            { takeAction(); }, 150);
        }
    }
    
 

     //Testing/Using the modal function
    //Note: Callbacks used extensively 
    ID("delete").onclick = function()
    {
        //Setting the this value appropriately in setTimeout and inner functions
          var that = this;
          modal("Are you sure you want to delete this message?", "Delete Message", "My Confirm", deleete);
          function deleete(yes) 
          {
              if (yes)
              {
                 that.parentNode.style.display = "none";
                   setTimeout(function()
                   {
                       modal("Would you like a retry?", "Retry", "My Confirm", 1, retry);
                       function retry(yes)
                       {
                           if (yes)
                                that.parentNode.style.display = "block";
                            else
                                setTimeout(function()
                                {
                                    ID("modal-yes").style.display = "none";
                                    ID("modal-no").innerHTML = "OK";
                                    modal("OK. Bye. Catch ya later and happy coding. ;)", "Bye");
                               }, 300);
                       }
                   }, 700);
               }
          }
    }
}

/***
 *
 *    Okay, let me try to explain my code a little more with this not too long documentation:
 
 *    1.    The openModal() function takes 4 (four) parameters which are, however, optional:
 *        This function is used/called/invoked in the main function, modal(), and it inherits/gets its parameters from the first four parameters/arguments in the modal() function, and is used to display/open the modal.
 *        It returns a boolean (true or false) depending on the value of the modalType parameter.
 *        It returns true if the modalType parameter value is equal to 1 or true, which implies that the type of modal requested by the operator (programmer) is a "Confirm" modal which will be displayed with two buttons (YES and NO) else...an "Alert" modal is displayed with only one button (OK) accordingly.
 
 *    2.    The closeModal() function takes no parameters and is also called/used/invoked in the main function, modal(), to close/hide the modal.
 *        It also returns a boolean depending on the action of the user.
 *        It returns true if the user clicks YES on the "Confirm" modal and false if the user clicks OK on the "Alert" modal or NO on the "Confirm" modal.
 *        E.g. See how I assigned its return value (true or false) to the variable, userClickedYes, in the main function, modal() above.
     
 *    3.    The main function, modal(), takes 5 (five) parameters which are also all optional. The parameters/arguments are respectively (in ascending order);
 *            modalMessage: The message the operator (programmer) wants displayed to the user;
 *            actionTitle: The title of the action/message the operator wants to pass across to the user. (Will be paced in the modal header along side modalName)
 *            modalName: The custom name of the modal. It can be an app name, website name etc. instead of the default "Confirm" or "Alert".
 *            modalType: A number (1 or 0) or boolean (true or false) which tells the modal() function what type of modal to display. True or 1 for "Confirm" and false or 0 for "Alert".
 *            takeAction: This is the function the operator wants invoked/called after the user action. It is a higher-order (callback) function which will be triggered on close of the modal (or after the closeModal() function has returned).
 *                It should be passed a parameter or an argument depending on the modal type.
 *                If the modal type is "Confirm", it should or must be passed a parameter else if the "Confirm" modal is displayed, it would function or behave like the "Alert" modal.
 *                But if a parameter/an argument is passed, the parameter/argument will then be converted to or treated as (or the value would be) a boolean (true or false) which is as a result of the user clicking YES or NO on the "Confirm" modal which can then be used in conditional statements in the callback function itself. 
 *                E.g. See how I passed single parameters into each callback in the test above and used it in their respective functions.
 *                Notwithstanding, if the modal type is "Alert", a parameter need not be passed.
 
 *    Note:
 *    If the number of parameters passed into the modal() function is less than 5, the function (modal) is smart enough to then check if the last parameter is a function. If the last parameter is a function, it takes or treats it a its callback.
 *    E.g. Notice the length of the parameters in the test function above and the displayMessage() function at the beginning of the script.
 
***/
      
