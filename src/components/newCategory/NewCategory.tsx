import React from 'react';
import { SetStateAction, useState } from 'react';
import { set, ref } from "firebase/database";
import { db } from "../../services/firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { Icons } from './Icons';
import './newCategory.scss'

const AddCategory = () => {

  const [name, setName] = useState('');
  const [img, setImg] = useState('images/Icons/default-icon.png');
  const [view, setView] = useState(false);
  
  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setName(e.target.value);
  }

  const handleImgChange = (icon: string) => {
    setImg(icon)
    setView(false)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    // const newCategory = {
    //   id: Date.now(),
    //   title,
    //   icon
    // }
    const id = uuidv4();
    set(ref(db, `CategoriesList/${id}`), {
      id,
      img,
      name,
    })
    console.log("added to firebase");
    setName("");
    setImg('images/Icons/default-icon.png');
  };
    // console.log(newCategory);
  //}

  const navigate = useNavigate();

  return(
  <>
    <div className="category-header">
      <IconButton onClick={() => {
            navigate("/allCategories")
        }}>  
        <ArrowBackIosIcon className='arrowBack' />
      </IconButton>    
      <h2>New Category</h2>
      <IconButton onClick={handleSubmit}>
          <img className="category-tick" src="images/category-ok.png" alt="ok">
          </img>
      </IconButton>
    </div>  
    <Divider className='divider' />
    <div className="category-item">
        <span>Name</span>
        <input value={name} onChange={handleNameChange} className="category-field" />

        {/* <input value={amount} onChange={handleChange} className="category-field" /> */}
      </div>
    <Divider className='divider' />
    <div className="category-item">
        <span>Icon</span>
        <img className="category-tick" src={img} alt="icon"
            onClick={() => {
              setView(!view)
          }}>
        </img>
    </div>
    <Divider className='divider' />
    {view && <Icons callBack={handleImgChange}/>}

    </>
      
    )
}

export default AddCategory;