/**
 * <div id ="parent">
 * <div id = "child">
 * <h1>"I'm An h1 tag"</h1>
 * <h2>"I'm An h2 tag"</h2>
 * </div>
 * <div id = "child2">
 * <h1>"I'm An h1 tag"</h1>
 * <h2>"I'm An h2 tag"</h2>
 * </div>
 * </div>
 *
 * ReactElement(object) => HTML(Understands the browser)
 */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaste React 🚀"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//JSX
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React🙏!"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
