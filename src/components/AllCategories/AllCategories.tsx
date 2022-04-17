import React from "react";
import Categories from "../Category/Category";
import { useNavigate } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
import "../Category/category.scss";


const AllCategories: React.FC = () => {
    const navigate = useNavigate();
    return (
    <div className="category-page">
        <div className='category-menu'>
            <IconButton>  
                <ArrowBackIosIcon className='arrowBack'></ArrowBackIosIcon>
            </IconButton>    
            <h2>Categories</h2>
            <IconButton>
                <img className="add-icon" src="../images/Icons/add_cat.png" alt=""
                    onClick={() => {
                    navigate("/addcategory")
                     }}>
                </img>
            </IconButton>
        </div>

        <Categories />

    </div>
)}

export default AllCategories;
