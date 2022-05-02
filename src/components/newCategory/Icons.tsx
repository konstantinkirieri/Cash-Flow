import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import "../Category/category.scss";

export interface Icon {
    id: number,
    img: string,
}

export const iconsCatalog: Icon[] = [
    {
        id: 1,
        img: "../images/Icons/IconsCatalog/1.png",
    },
    {
        id: 2,
        img: "../images/Icons/IconsCatalog/2.png",
    },
    {
        id: 3,
        img: "../images/Icons/IconsCatalog/3.png",
    },
    {
        id: 4,
        img: "../images/Icons/IconsCatalog/4.png",
    },
    {
        id: 5,
        img: "../images/Icons/IconsCatalog/5.png",
    },
    {
        id: 6,
        img: "../images/Icons/IconsCatalog/6.png",
    },
    {
        id: 7,
        img: "../images/Icons/IconsCatalog/7.png",
    },
    {
        id: 8,
        img: "../images/Icons/IconsCatalog/8.png",
    },
    {
        id: 9,
        img: "../images/Icons/IconsCatalog/9.png",
    },
    {
        id: 10,
        img: "../images/Icons/IconsCatalog/10.png",
    },
    {
        id: 11,
        img: "../images/Icons/IconsCatalog/11.png",
    },
    {
        id: 12,
        img: "../images/Icons/IconsCatalog/12.png",
    },
    {
        id: 13,
        img: "../images/Icons/IconsCatalog/13.png",
    },
    {
        id: 14,
        img: "../images/Icons/IconsCatalog/14.png",
    },
    {
        id: 15,
        img: "../images/Icons/IconsCatalog/15.png",
    }
]

export const Icons: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className='category-menu'>
            <IconButton>  
                <ArrowBackIosIcon className='arrowBack' onClick={() => {
                    navigate("/addcategory")
                        }}></ArrowBackIosIcon>
            </IconButton>    
            <h2>Icons</h2>
            <div className="blank"></div>
        </div>
        <div className="cat-block">
        {iconsCatalog.map((item) => (
            
            <div className="cat-item" key={item.id}
            onClick={() => {
                navigate("/addcategory")
            }}>
                <div className="cat-icon">
                    <img src={item.img} alt=""/>
                </div>
            </div> 
        ))
        }
        </div>
        </>
)}