
import React, { useContext } from 'react';
import { ItemContext } from './ItemContext';

function ItemList() {
  const { items, deleteItem, editItem } = useContext(ItemContext);

  const handleDelete = (id) => {
    deleteItem(id);
  };

  const handleEdit = (item) => {
    editItem(item);
  };

  return (
    <div className="items-container">
      {items.map((item) => (
        <div className="list" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;