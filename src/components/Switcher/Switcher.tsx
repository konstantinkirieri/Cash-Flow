import React from "react";
import "./switch.scss";
// import { IconButton } from "@mui/material";

const Switcher: React.FC = () => {
    return (
        <div className='switcher'>
            <button className="exp-btn">
                Expenses
            </button>    
            <button className="inc-btn">
                Income
            </button>
        </div>
    )}


export default Switcher;  