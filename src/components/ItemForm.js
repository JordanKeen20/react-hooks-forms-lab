import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
const [name, setName] = useState('');
const [category, setCategory] = useState('')

function nameChanging(event){
  setName(event.target.value);
}

function categoryChange(event){
  setCategory(event.target.value)
}

function Submitting(event){
  event.preventDefault()
  onItemFormSubmit({
    id: uuid(),
    name,
    category,
  });
}

  return (
    <form className="NewItem" onSubmit ={Submitting}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value = {name}
        onChange = {nameChanging}        
        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        value = {category}
        onChange ={categoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
