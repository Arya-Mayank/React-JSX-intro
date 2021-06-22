import React from "react";
import ReactDom from "react-dom";

const fname = "Mayank";
const lname = "Arya";
const luckyNumber = 7;

const img = "https://picsum.photos/200";

const customStyle = {
  color: "pink",
  fontSize: "20px",
  border: "1px solid black"
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// can use this variable inside HTML by using curly braces {}

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {fname + " " + lname}!
    </h1>
    <ul>
      <li>My lucky number is {luckyNumber}</li>
      <li>list item</li>
      <li>list item</li>
    </ul>
    <div>
      <img alt="burger" className="img" src={img}></img>
      <img alt="pastries" className="img" src={img}></img>
      <img alt="fastfood" className="img" src={img}></img>
    </div>
    {/* adding inline css using jsx */}
    <p style={{ color: "blue" }}>Created by {fname + " " + lname}.</p>
    <p style={customStyle}>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
