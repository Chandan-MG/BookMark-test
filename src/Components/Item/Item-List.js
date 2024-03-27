// Item.js
import React from 'react';
import './Item-List.css';

const ItemList = (props) => {
  const handleDeleteClick = () => {
    props.onDelete();
  };
  
  const handleEditClick = () => {
    props.onEdit();
  };

  return (
    <div className='list'>
      <span>{props.name}</span>
      <button onClick={handleEditClick}>edit</button>
      <button onClick={handleDeleteClick}>delete</button>
    </div>
  );
};

export default ItemList;
