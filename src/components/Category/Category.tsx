import React from "react";
import { useNavigate } from "react-router-dom"
import "./category.scss";
import IconButton from '@mui/material/IconButton';
import { store } from '../store';


interface PropsType {
    typeId: any
    callBack: (img: any) => void
}

const Categories: React.FC<PropsType> = (props) => {
    const navigate = useNavigate();

    const categoriesList: any = store.getState().categories.categoriesList
    // console.log(categoriesList)

    categoriesList.forEach((elem: any) => {
        if (elem.typeId === props.typeId) {
            console.log("Income", elem.typeId, props.typeId)
        }
    });

    return (
        <div className="cat-block">

            {Object.keys(categoriesList).map((id) => {
                return (
                    <div className="cat-item" key={categoriesList[id].id} onClick={() => props.callBack(categoriesList[id].img)}>
                        <div className="cat-icon">
                            <img src={categoriesList[id].img} alt="" />
                        </div>
                        <p className="cat-name">{categoriesList[id].name}</p>
                    </div>
                )
            })
            }

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