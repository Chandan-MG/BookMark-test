// Modal.js
import React, { useState, useContext } from 'react';
import { ItemContext } from '../Item/ItemContext.js';

function Modal() {
  const { isOpen, closeModal, currentItem, addItem, updateItem } = useContext(ItemContext);
  const [itemName, setItemName] = useState(currentItem ? currentItem.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    if (currentItem) {
      updateItem({ ...currentItem, name: itemName });
    } else {
      addItem(itemName);
    }
    setItemName('');
    closeModal();
  };

  return isOpen ? (
    <div>
      <div onClick={(e) => e.stopPropagation()}>
        <h2>{currentItem ? 'Edit Item' : 'Add New Item'}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          <button type="submit">{currentItem ? 'Update' : 'Add'}</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  ) : null;
}

export default Modal;
