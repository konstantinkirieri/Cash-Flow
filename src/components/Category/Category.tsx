import React from "react";
import { Category } from "../../model";
import "./category.scss";

const CaregoriesList: Category[] = [
    {
        id: 1,
        link: "../images/Icons/house.png",
        name: "House",
    },
    {
        id: 2,
        link: "../images/Icons/food.png",
        name: "Food",
    },
    {
        id: 3,
        link: "../images/Icons/sport.png",
        name: "Sport",
    },
    {
        id: 4,
        link: "../images/Icons/health.png",
        name: "Health",
    },
    {
        id: 5,
        link: "../images/Icons/car.png",
        name: "Car",
    },
    {
        id: 6,
        link: "../images/Icons/cloth.png",
        name: "Cloth",
    },
    {
        id: 7,
        link: "../images/Icons/lunch.png",
        name: "Lunch",
    },
    {
        id: 8,
        link: "../images/Icons/all.png",
        name: "All Categories",
  },
  ]

const ExpIcons: React.FC = () => {
  return (
    <div className="icons-block">
        <div>
            <img className="catImg" src="../images/Icons/house.png" alt=""/>
            <span className="cat-name">House</span>
        </div>
      {CaregoriesList.map((cat) => (
        <div>
          <img className="iconImg" {...cat.link} alt=""/>
          <span className="icon-name" {...cat.name}/>
        </div>
      ))
      }
    </div>
)}

export default ExpIcons;
