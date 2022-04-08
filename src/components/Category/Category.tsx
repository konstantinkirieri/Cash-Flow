import React from "react";
import { Category } from "../../model";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import "./category.scss";

<<<<<<< refs/remotes/origin/testingBeforeDev
export const caregoriesList: Category[] = [
=======
const caregoriesList: Category[] = [
>>>>>>> dummy update
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
<<<<<<< refs/remotes/origin/testingBeforeDev
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
<<<<<<< refs/remotes/origin/testingBeforeDev
<<<<<<< refs/remotes/origin/testingBeforeDev
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
=======
            {/* {CaregoriesList.map((cat) => (
                <div>
                    <img className="iconImg" {...cat.link} alt=""/>
                    <span className="icon-name" {...cat.name}/>
                </div>
            ))
            } */}
        </div>
>>>>>>> MUI icons added
=======
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
>>>>>>> dummy update
=======
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
>>>>>>> icons src fix
    </div>
)}

export default ExpIcons;
