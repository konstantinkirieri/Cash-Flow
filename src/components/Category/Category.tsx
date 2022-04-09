import React from "react";
import { Category } from "../../model";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import "./category.scss";

export const caregoriesList: Category[] = [
    {
        id: 1,
        img: "../images/Icons/house.png",
        name: "House",
    },
    {
        id: 2,
        img: "../images/Icons/food.png",
        name: "Food",
    },
    {
        id: 3,
        img: "../images/Icons/sport.png",
        name: "Sport",
    },
    {
        id: 4,
        img: "../images/Icons/health.png",
        name: "Health",
    },
    {
        id: 5,
        img: "../images/Icons/car.png",
        name: "Car",
    },
    {
        id: 6,
        img: "../images/Icons/cloth.png",
        name: "Cloth",
    },
    {
        id: 7,
        img: "../images/Icons/lunch.png",
        name: "Lunch",
    },
    {
        id: 8,
        img: "../images/Icons/all_cat.png",
        name: "All Categories",
  },
  ]

const ExpIcons: React.FC = () => {
  return (
    <div className="category-page">
        <div className='category-menu'>
            <IconButton>  
                <ArrowBackIosIcon className='arrowBack'></ArrowBackIosIcon>
            </IconButton>    
            <h2>Categories</h2>
            <IconButton>
                <AddIcon className='addIcon'/>
            </IconButton>
        </div>


        <div className="cat-block">
            {caregoriesList.map((item) => (
                
                <div className="cat-item" key={item.id}>
                    <div className="cat-icon">
                        <img className="cat-icon" src={item.img} alt=""/>
                    </div>
                <p className="cat-name">{item.name}</p>
                </div> 
            ))
            }
        </div>
    </div>
)}

export default ExpIcons;
