import React from 'react';
import { useNavigate } from "react-router-dom";
import './newCategory.scss';

interface icons {
  id: number,
  title: string,
  url: string
}

export const iconsList: icons[] = [
    {
      id: 1,
      title: "Refueling",
      url: "../images/listIcon/refueling.png",
    },
    {
      id: 2,
      title: "Happy Birthday",
      url: "../images/listIcon/happy.png",
    },
    {
      id: 3,
      title: "Present",
      url: "../images/listIcon/present.png",
    },
    {
      id: 4,
      title: "Restaurant",
      url: "../images/listIcon/restaurant.png",
    },
    {
      id: 5,
      title: "Cakes",
      url: "../images/listIcon/cakes.png",
    },
    {
      id: 6,
      title: "The Pencils",
      url: "../images/listIcon/pencils.png",
    },
    {
      id: 7,
      title: "Animals",
      url: "../images/listIcon/animals.png",
    },
    {
      id: 8,
      title: "The Drinks",
      url: "../images/listIcon/drinks.png",
    },
    {
      id: 9,
      title: "Spirit",
      url: "../images/listIcon/spirit.png",
    },
    {
      id: 10,
      title: "Food",
      url: "../images/listIcon/food.png",
    },
    {
      id: 11,
      title: "Care",
      url: "../images/listIcon/care.png",
    },
    {
      id: 12,
      title: "Haircut",
      url: "../images/listIcon/haircut.png",
    },
    {
      id: 13,
      title: "Salon",
      url: "../images/listIcon/salon.png",
    },
    {
      id: 14,
      title: "Beach",
      url: "../images/listIcon/beach.png",
    },
    {
      id: 15,
      title: "Rest",
      url: "../images/listIcon/rest.png",
    }
]

export const IconList = () => {

    const navigate = useNavigate();
  
  return (
    <>
      <header className="category-header">
      <img className="category-img" alt="back" src="images/category-back.png" width='24' height='24' onClick={() => { navigate("/addCategory")}} />
        <h3 className="category-title">
          Icons
        </h3>
      </header>
      <>
        <main>
          <div className="icon-parent">
            {iconsList.map((icon) => (
              <div className="icon-list" key={icon.id}>
                <div className="icon-item">
                  <img src={icon.url} alt="" />
                </div>
              </div>))}
          </div>
        </main>
      </>
    </>
  )
}
