      Let’s start with the basics and add some JavaScript to a webpage.

      On the web, JavaScript code lives inside the HTML document, and needs to be enclosed by <script> and </script>:
<script>
   ...
</script>

      You can put the script tag anywhere in the HTML document.
      What tag do you need to use to enclose the JavaScript code? --> script


Output
      Let's use JavaScript to print "Hello World" to the browser. This is what that would look like.
      HTML Code:
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
		
    </body>
</html>
      
      JS Code:
document.write("Hello World!");

      
      Notice some extra stuff there? Nothing gets past you!
      Time to introduce the document.write() function. This is what we need to use to write text into our HTML document.
      You can also use standard HTML markup language to customize the appearance text in the output:
      JS Code:
document.write("<h1>Hello World!</h1>");

      document.write() should be used only for testing. We’ll cover some other output mechanisms real soon.

      Output "Hello!" in the browser.
<script>
document.write("Hello!");
</script>


Output to console
      Right, we’re now experts in writing HTML output with document.write().
      Time for a different type of output. Let’s learn about output to the browser console.

      For this we’ll be needing the trusty console.log() function.

      Wait, not so fast! What’s this console we’re talking about?

      The console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings.

      It looks like this:
console.log("Hello from console!")

      Devs mostly use the console to test their JavaScript code.
      Remember: console.log(" ") outputs text into console 
                document.write(" ") overwrites text on the page
      
