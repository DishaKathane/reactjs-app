import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React🙏!"
);
console.log(heading);
//JSX - HTML-like / XML-like but it's a javascript syntax
const jsxHeading = <h1> Welcome to JSX world 🙏!</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);  //reactdom takes the html and push it the browser


//JSX --> JS SYNTAX WHICH IS EASIER TO CREATE REACT ELEMENT (it is not the part of react) 
// jsx makes developer life easy.
//