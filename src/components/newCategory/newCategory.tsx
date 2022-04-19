import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";
import './newCategory.scss';

const useStyles = makeStyles((theme: any) => ({
  
  quantityRoot: {
    "& .MuiOutlinedInput-notchedOutline": {
      width: "313px",
      border: "none",
      borderBottom: '1px solid #D2CECE',
      borderRadius: 'initial',
      padding: 0,
    },
  },
}));

export const AddCategory = () => {
  
  const navigate = useNavigate();
  const classes = useStyles();

  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleChange = (e: SelectChangeEvent) => {
    setAmount(e.target.value);
  }

  const handleTitleChange = (e: SelectChangeEvent) => {
    setTitle(e.target.value);
  }

  const handleIconChange = (e: SelectChangeEvent) => {
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

    return(
      <>
        <header className="category-header">
          <img alt="back" src="images/category-back.png" width='24' height='24' onClick={() => { navigate("/allCategories")}} />
          <h3 className="category-title">
            New Category
          </h3>
          <button className="category-tick" onClick={handleSubmit}><img alt="ok" src="images/category-ok.png" width='24' height='24'/></button>
        </header>
        <main>
          <div className="category-inputes">
            <input value={amount} onChange={handleChange} className="category-field" />
            <span className="input-placeholder">Name</span>
            <input value={title} onChange={handleTitleChange} className="category-field" style={{marginBottom: 'inherit'}} />
          </div>
          <FormControl  
            classes={{
              root: classes.quantityRoot
            }}
            className="form-control"
            variant="outlined"
            sx={{ m: 1, minWidth: 120, margin: 0 }}>
            <InputLabel id="demo-simple-select-standard-label"><span className="icon-text">Icon</span></InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={icon}
              onChange={handleIconChange}
              IconComponent={props => <img {...props} alt="House" src="images/category-select.png" />}
              label="Icon"
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              <MenuItem value={'House'}><img alt="House" src="images/Icons/house.png"/></MenuItem>
              <MenuItem value={'Food'}><img alt="Food" src="images/Icons/food.png"/></MenuItem>
              <MenuItem value={'Sport'}><img alt="Sport" src="images/Icons/sport.png"/></MenuItem>
              <MenuItem value={'Health'}><img alt="Health" src="images/Icons/health.png"/></MenuItem>
              <MenuItem value={'Car'}><img alt="Car" src="images/Icons/car.png"/></MenuItem>
              <MenuItem value={'Cloths'}><img alt="Cloths" src="images/Icons/cloth.png"/></MenuItem>
              <MenuItem value={'Lunch'}><img alt="Lunch" src="images/Icons/lunch.png"/></MenuItem>
              <MenuItem value={'Relax'}><img alt="Relax" src="images/Icons/relax.png"/></MenuItem>
            </Select>
          </FormControl>
        </main>
      </>
    )
}