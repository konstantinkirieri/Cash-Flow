import React from "react";
import { Category } from "../../model";
import { useNavigate } from "react-router-dom"
import "./category.scss";
import { onValue } from "firebase/database";
import { categoryRef } from "../../services/firebase";
import IconButton from '@mui/material/IconButton';

export const categoriesList: Category[] = [];
    // {
    //     id: 1,
    //     typeId: 2,
    //     img: "../images/Icons/house.png",
    //     name: "House"
    // },
    // {
    //     id: 2,
    //     typeId: 2,
    //     img: "../images/Icons/food.png",
    //     name: "Food"
    // },
    // {
    //     id: 3,
    //     typeId: 2,
    //     img: "../images/Icons/sport.png",
    //     name: "Sport"
    // },
    // {
    //     id: 4,
    //     typeId: 2,
    //     img: "../images/Icons/health.png",
    //     name: "Health"
    // },
    // {
    //     id: 5,
    //     typeId: 2,
    //     img: "../images/Icons/car.png",
    //     name: "Car"
    // },
    // {
    //     id: 6,
    //     typeId: 2,
    //     img: "../images/Icons/cloth.png",
    //     name: "Cloth"
    // },
    // {
    //     id: 7,
    //     typeId: 2,
    //     img: "../images/Icons/lunch.png",
    //     name: "Lunch"
    // },
    // {
    //     id: 8,
    //     typeId: 1,
    //     img: "../images/Icons/salary.png",
    //     name: "Salary"
    // },
    // {
    //     id: 9,
    //     typeId: 1,
    //     img: "../images/Icons/other_inc.png",
    //     name: "Other income"
    // },
//]
interface PropsType {
    callBack: (img: string) => void
}
 const Categories: React.FC<PropsType> = (props) => {
    const navigate = useNavigate();

            let CategoriesList: any = [];
            
            onValue(categoryRef, (snapshot) => {
           
                let CopyCatArray = snapshot.val();
                Object.keys(CopyCatArray).forEach((id) => {
                  CategoriesList.push(CopyCatArray[id]);
                  console.log(CategoriesList);
              })    
          });

    return (
        <div className="cat-block">

            {Object.keys(CategoriesList).map((id) => {
                            return ( 
                    <div className="cat-item" key={CategoriesList[id].id} onClick={() => props.callBack(CategoriesList[id].img)}>
                        <div className="cat-icon">
                            <img src={CategoriesList[id].img} alt="" />
                        </div>
                        <p className="cat-name">{CategoriesList[id].name}</p>
                    </div> 
                            )
                })
               }
                {/* <div className="cat-item">
                    <div className="cat-icon">
                        <img className="cat-icon" src="../images/Icons/all_cat.png" alt=""
                        onClick={() => {
                            navigate("/allCategories")
                             }}/>
                    </div>
                    <p className="cat-name">All Categories</p>
                </div> */}
                <div className="cat-item">
                <IconButton onClick={() => {
                    navigate("/addcategory")
                     }}>
                <img className="add-icon" src="../images/Icons/add_cat.png" alt="">
                </img>
            </IconButton>
            </div>
            </div>
    );
};

export default Categories;