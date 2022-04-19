import React from 'react';
import { SetStateAction, useState } from 'react';
import './newCategory.scss'

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

    return(
      <>
        <header className="category-header">
          <img alt="back" src="images/category-back.png" width='24' height='24' />
          <h3 className="category-title">
            New Category
          </h3>
          <button className="category-tick" onClick={handleSubmit}><img alt="ok" src="images/category-ok.png" width='24' height='24'/></button>
        </header>
        <main>
          <div className="category-inputes">
            <input value={amount} onChange={handleChange} className="category-field" />
            <input value={title} onChange={handleTitleChange} placeholder="Name" className="category-field" style={{marginBottom: 'inherit'}} />
          </div>
          <div className="category-section">
            <select className="category-select" onChange={handleIconChange} value={icon} >
              <option selected disabled style={{color: 'grey', backgroundColor: 'lightslategrey'}}>Icon</option>
              <option className="category-option" value="House">House</option>
              <option className="category-option" value="Food">Food</option>
              <option className="category-option" value="Sport">Sport</option>
              <option className="category-option" value="Health">Health</option>
              <option className="category-option" value="Car">Car</option>
              <option className="category-option" value="Cloths">Cloths</option>
              <option className="category-option" value="Car">Car</option>
              <option className="category-option" value="Lunch">Lunch</option>
              <option className="category-option" value="Relax">Relax</option>
            </select>
          </div>
        </main>
      </>
    )
}