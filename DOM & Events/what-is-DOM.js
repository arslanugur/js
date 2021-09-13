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
edededede

  
