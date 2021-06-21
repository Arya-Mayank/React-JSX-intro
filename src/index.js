import React from "react";
import ReactDom from "react-dom";

const fname = "Mayank";
const lname = "Arya";
const luckyNumber = 7;

// can use this variable inside HTML by using curly braces {}

ReactDom.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <ul>
      <li>My lucky number is {luckyNumber}</li>
      <li>list item</li>
      <li>list item</li>
    </ul>
  </div>,
  document.getElementById("root")
);
