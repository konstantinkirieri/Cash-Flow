import React from "react";
import { Category } from "../../model";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import HouseIcon from '@mui/icons-material/House';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AddIcon from '@mui/icons-material/Add';
import "./category.scss";

const caregoriesList: Category[] = [
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
        img: "../images/Icons/all.png",
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
            <div className="cat-item">
                <div className="cat-icon"><HouseIcon/></div>
                <p className="cat-name">House</p>
            </div>
            <div className="cat-item">
                <div className="cat-icon"><RestaurantIcon/></div>
                <p className="cat-name">Food</p>
            </div>
            <div className="cat-item">
                <div className="cat-icon"><SportsTennisIcon/></div>
                <p className="cat-name">Sport</p>
            </div>
            <div className="cat-item">
                <div className="cat-icon"><HealthAndSafetyIcon/></div>
                <p className="cat-name">Health</p>
            </div>
            <div className="cat-item">
                <div className="cat-icon"><DirectionsCarIcon/></div>
                <p className="cat-name">Car</p>
            </div>
            <div className="cat-item">
                <div className="cat-icon"><CheckroomIcon/></div>
                <p className="cat-name">Cloth</p>
            </div>
            <div className="cat-item">
                <div className="cat-icon"><MobileFriendlyIcon/></div>
                <p className="cat-name">Mobile</p>
            </div>
            <div className="cat-item">
                <div className="cat-icon"><AlignHorizontalLeftIcon/></div>
                <p className="cat-name">All Categories</p>
            </div>
        </div>

            <div className="cat-block">
                {caregoriesList.map((item) => (
                    
                    <div className="cat-item" key={item.id}>
                        <div className="cat-icon">
                            <img className="cat-icon" {...item.img} alt=""/>
                        </div>
                    <p className="cat-name">{item.name}</p>
                    </div> 
                ))
                }
            </div>
    </div>
)}

export default ExpIcons;
