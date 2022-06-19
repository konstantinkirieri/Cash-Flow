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
  const [typeId, setTypeId] = useState('Expenses');
  const [view, setView] = useState(false);

  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setName(e.target.value);
  }

  const handleTypeChange = (typeId: string) => {
    setTypeId(typeId)
    console.log(typeId)
  }

  const handleImgChange = (icon: string) => {
    setImg(icon)
    setView(false)
  }

  const handleSubmit = (dispatch: { preventDefault: () => void; }) => {
    dispatch.preventDefault()

    const id = uuidv4();
    set(ref(db, `CategoriesList/${id}`), {
      id,
      name,
      img,
      typeId,
    })
    console.log("added to firebase");
    setName("");
    setTypeId('Expenses');
    setImg('images/Icons/default-icon.png');
  };

  const navigate = useNavigate();

  return(
  <>
    <div className="category-header">
      <IconButton onClick={() => {
            navigate("/main")
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
      </div>
    <Divider className='divider' />
    <div className="category-item">
        <span>Type</span>
        <button value={typeId === 'Expenses' ? 'Income': 'Expenses'} onClick={() => handleTypeChange(typeId === 'Expenses' ? 'Income': 'Expenses')} className="category-field">{typeId}</button>
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