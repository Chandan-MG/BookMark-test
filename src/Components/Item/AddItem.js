import React, { useState } from 'react';

const AddItemForm = (props) => {
    const [itemName, setItemName] = useState(props.itemName || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    props.onAddItem(itemName);
    setItemName('');
  };

  return (
    <div className='add-input'>
      <h2>{props.itemName ? 'Edit Item' : 'Add New Item'}</h2>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        <button type="submit">{props.itemName ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddItemForm;
