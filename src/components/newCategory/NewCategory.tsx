import React from 'react';
import { SetStateAction, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { Icons } from './Icons';
import './newCategory.scss'

const AddCategory = () => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('images/Icons/default-icon.png');
  const [view, setView] = useState(false);
  
  const handleTitleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(e.target.value);
  }

  const handleIconChange = (img: string) => {
    setIcon(img)
    setView(false)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    const newCategory = {
      id: Date.now(),
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
        <img className="category-tick" src={icon} alt="icon"
            onClick={() => {
              setView(!view)
          }}>
        </img>
    </div>
    <Divider className='divider' />
    {view && <Icons callBack={handleIconChange}/>}

    </>
      
    )
}

export default AddCategory;