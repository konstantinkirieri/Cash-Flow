import { SetStateAction, useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { Icons } from './Icons';
import './newCategory.scss';

interface InputProps {
  onAdd: (name: string, img: string) => void;
}

export const AddCategory: React.FC<InputProps> = ({
  onAdd,
}) => {

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

  const addCategory = useCallback(() => {
    onAdd(title, icon);
    setTitle('');
    setIcon('images/Icons/default-icon.png');
  }, [title, icon, onAdd])
  
  const handleKeySubmit = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      addCategory();
    }
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
            onClick={addCategory}>
          </img>
        </IconButton>
      </div>  
      <Divider className='divider' />
      <div className="category-item">
        <span>Name</span>
        <input className="category-field"
          value={title}
          onChange={handleTitleChange}
          onKeyDown={handleKeySubmit}
        />
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

// function newCategory(newCategory: any) {
//   throw new Error('Function not implemented.');
// }
