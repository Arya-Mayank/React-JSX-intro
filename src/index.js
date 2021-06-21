import React from "react";
import ReactDom from "react-dom";

const fname = "Mayank";
const lname = "Arya";
const luckyNumber = 7;

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
      <img
        alt="burger"
        className="img"
        src="https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg"
      ></img>
      <img
        alt="pastries"
        className="img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
      ></img>
      <img
        alt="fastfood"
        className="img"
        src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2020/04/22/coronavirus-and-obesity-doctors-take-aim-at-food-industry-over-poor-diets/10933380-3-eng-GB/Coronavirus-and-obesity-Doctors-take-aim-at-food-industry-over-poor-diets_wrbm_large.jpg"
      ></img>
    </div>
    <p>Created by {fname + " " + lname}.</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
