import React from 'react';
import { SetStateAction, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import './newCategory.scss'
// import "../Category/category.scss";

export const AddCategory = () => {

  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setAmount(e.target.value);
  }

  const handleTitleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(e.target.value);
  }

  const handleIconChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setIcon(e.target.value);
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    const newCategory = {
      id: Date.now(),
      amount,
      title,
      icon
    }

    console.log(newCategory);
  }

  const navigate = useNavigate();

    return(
    <>
      <div className="category-header">
        <IconButton>  
          <ArrowBackIosIcon className='arrowBack' onClick={() => {
              navigate("/allCategories")
          }}></ArrowBackIosIcon>
        </IconButton>    
        <h2>New Category</h2>
        <IconButton>
            <img className="category-tick" src="images/category-ok.png" alt="ok"
                onClick={handleSubmit}>
            </img>
        </IconButton>
      </div>
      
      
        <Divider className='divider' />
        <div className="category-item">
            <span>Name</span>
            <input value={title} onChange={handleTitleChange} className="category-field" />

            {/* <input value={amount} onChange={handleChange} className="category-field" /> */}
          </div>
        <Divider className='divider' />
        <div className="category-item">
            <span>Icon</span>
            <img className="category-tick" src="images/Icons/default-icon.png" alt="ok"
                onClick={() => {
                  navigate("/icons")
              }}>
            </img>
        </div>
        <Divider className='divider' />

        </>
      
          // {/* <div className="category-item">
          //   <select className="category-select" onChange={handleIconChange} value={icon} >
          //     {/* <option selected disabled style={{color: 'grey', backgroundColor: 'lightslategrey'}}>Icon</option>
          //     <option className="category-option" value="House">House</option>
          //     <option className="category-option" value="Food">Food</option>
          //     <option className="category-option" value="Sport">Sport</option>
          //     <option className="category-option" value="Health">Health</option>
          //     <option className="category-option" value="Car">Car</option>
          //     <option className="category-option" value="Cloths">Cloths</option>
          //     <option className="category-option" value="Car">Car</option>
          //     <option className="category-option" value="Lunch">Lunch</option>
          //     <option className="category-option" value="Relax">Relax</option> */}
          //   </select>
          // </div> */}
    )
}