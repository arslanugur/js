The DOM
      /*When you open any webpage in a browser, 
        the HTML of the page is loaded and rendered visually on the screen.
        To accomplish that, the browser builds the "Document Object Model" of that page, 
        which is an object oriented model of its logical structure.
        The DOM of an HTML document can be represented as a nested set of boxes:*/
//DOM Tree:
                    /---<head>---<title>
Document---<html>--
                    \---<body>---<h1>
                              \---<a>
  
      //JS can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.

      /*Simply, DOM is the tree that described your visual HTMl page. 
        Firstly, it renders it's root " <html> " tag 
        then it forks that root to 2 branches " <head> " and " <body> " 
        and both of them forkes as many as tags in each of them .... etc. 
        Briefly, DOM is how your page's created from the browser's perspective*/
  
  
DOM Tree
      /*The DOM represents a document as a tree structure.
        HTML elements become interrelated nodes in the tree.
        All those nodes in the tree have some kind of relations among each other.
        Nodes can have child nodes. Nodes on the same tree level are called siblings.*/

      /*For the example above:
        <html> has two children (<head>, <body>);
        <head> has one child (<title>) and one parent (<html>);
        <title> has one parent (<head>) and no children;
        <body> has two children (<h1> and <a>) and one parent (<html>);*/

      //It is important to understand the relationships between elements in an HTML document.. 
      //in order to be able to manipulate them with JavaScript.


      //It's also important for styling in CSS. 
      //If you understand relations, you can easily use inheritance 
      //by adding combinators to give specific style to siblings, children or other descendants. 
      //It's very useful in more complicated projects. 
      //For example, we can set style to only first child or even child or all children but not distant descendants. 
      //Example: div ~ p { border-radius: 10px; } It gives rounded corners to all siblings of the element. 
      //In addition, properties like color or font-family are inherited from the first ancestor (html element), 
      //but in some cases we don't want to give all elements the same property. 
      //We can do it the hard way, declaring every element separately or use the knowledge about DOM. 


      //Example
//In the following HTML, which element is the parent of h1? -> p
<body>
  <p><h1>Hi</h1></p>         //<parent><child>Hi</child></parent>
</body>
 
//Siblings are both within the same parent but not within each other. 
//<parent> <sibling1></sibling1> <sibling2></sibling2> </parent> 


The document Object = the root of DOM
      //There is a predefined document object in JavaScript, which can be used to access all elements on the DOM.
      //In other words, the document object is the owner (or root) of all objects in your webpage.
      //So, if you want to access objects in an HTML page, you always start with accessing the document object. 

      //For example:
document.body.innerHTML = "Some text";

      //As body is an element of the DOM, 
      //we can access it using the document object and change the content of the innerHTML property.

      //The innerHTML property can be used on almost all HTML elements to change its content.

      //The innerHTML property is... 
      //...read-only on the col, colGroup, frameSet, html, head, style, table, tBody, tFoot, tHead, title, and tr objects. 
      //So it cannot be used to change any element.

      //https://www.w3schools.com/jsref/dom_obj_all.asp

      //The document object is the root of the DOM, not body. (document object contains whole document) 
      //Every HTML element has the innerHTML property. It can return any element. 
      //innerHTML property isn't a method, it's a variable or in some elements only a constant.






