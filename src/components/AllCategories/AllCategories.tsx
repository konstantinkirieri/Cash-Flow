import React from "react";
import Categories, { categoriesList } from "../Category/Category";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { ItemCategory } from "../Category-items/index";
import { useCategoryStore } from "../store/categories/toCategory"
import "../Category/category.scss";

export const AllCategories: React.FC = () => {

    const [
        categories,
    ] = useCategoryStore(state => [
        state.categories,
        state.createCategory,
    ]);

    const navigate = useNavigate();

    return (
        <>
            <div className="category-page">
                <div className='category-menu'>
                    <IconButton>
                        <ArrowBackIosIcon className='arrowBack' onClick={() => {
                            navigate("/switcher");
                        }}></ArrowBackIosIcon>
                    </IconButton>
                    <h2>Categories</h2>
                    <IconButton>
                        <img className="add-icon" src="../images/Icons/add_cat.png" alt=""
                            onClick={() => {
                              navigate("/addcategory");
                            }}>
                        </img>
                    </IconButton>
                </div>
                <Categories cats={categoriesList} />
            </div>
                {!categories.length && (
                    console.log('There are no categories.')
                )}
            <div className="cat-block">
                {categories.map((category) => (
                    <ItemCategory
                      id={category.id}
                      typeId={category.typeId}
                      name={category.name}
                      img={category.img}
                    />
                ))}
            </div>
        </>
)}

//export default AllCategories;
