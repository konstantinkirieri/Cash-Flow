import React from "react";
import { Category } from "../../model";
import { useNavigate } from "react-router-dom"
import "./category.scss";


export const categoriesList: Category[] = [
    {
        id: 1,
        typeId: 2,
        img: "../images/Icons/house.png",
        name: "House",
        // handleAdd: () => void
    },
    {
        id: 2,
        typeId: 2,
        img: "../images/Icons/food.png",
        name: "Food",
        // handleAdd: () => void
    },
    {
        id: 3,
        typeId: 2,
        img: "../images/Icons/sport.png",
        name: "Sport",
        // handleAdd: 
    },
    {
        id: 4,
        typeId: 2,
        img: "../images/Icons/health.png",
        name: "Health",
        // handleAdd: () => void
    },
    {
        id: 5,
        typeId: 2,
        img: "../images/Icons/car.png",
        name: "Car",
        // handleAdd: () => void
    },
    {
        id: 6,
        typeId: 2,
        img: "../images/Icons/cloth.png",
        name: "Cloth",
        // handleAdd: 
    },
    {
        id: 7,
        typeId: 2,
        img: "../images/Icons/lunch.png",
        name: "Lunch",
        // handleAdd: (e: React.FormEvent) => void
    },
    {
        id: 8,
        typeId: 1,
        img: "../images/Icons/salary.png",
        name: "Salary",
        // handleAdd:
    },
    {
        id: 9,
        typeId: 1,
        img: "../images/Icons/other_inc.png",
        name: "Other income",
        // handleAdd:
    },
]

export const Categories: React.FC<{cats: Category[]}> = ({cats}) => {
    
    const navigate = useNavigate();

    return (
        <div className="cat-block">
                {cats.map((item) => (
                    
                    <div className="cat-item" key={item.id}>
                        <div className="cat-icon">
                            <img src={item.img} alt=""/>
                        </div>
                        <p className="cat-name">{item.name}</p>
                    </div> 
                ))
                }
                <div className="cat-item">
                    <div className="cat-icon">
                        <img className="cat-icon" src="../images/Icons/all_cat.png" alt=""
                        onClick={() => {
                            navigate("/allCategories")
                             }}/>
                    </div>
                    <p className="cat-name">All Categories</p>
                </div>
            </div>
    )
}

export default Categories;