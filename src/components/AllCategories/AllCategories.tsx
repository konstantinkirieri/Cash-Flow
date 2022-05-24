import React from "react";
import Categories  from "../Category/Category";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import "../Category/category.scss";

export const AllCategories: React.FC = () => {
    const navigate = useNavigate();

    return (
    <div className="category-page">
        <div className='category-menu'>
            <IconButton onClick={() => {
                    navigate("/switcher")
                     }}>  
                <ArrowBackIosIcon className='arrowBack'></ArrowBackIosIcon>
            </IconButton>    
            <h2>Categories</h2>
            <IconButton onClick={() => {
                    navigate("/addcategory")
                     }}>
                <img className="add-icon" src="../images/Icons/add_cat.png" alt="">
                </img>
            </IconButton>
        </div>
        {/* <Categories cats={categoriesList} /> */}
    </div>
)}
