import React, { useState } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Modal from './Components/Modal/Modal';
import ItemList from './Components/Item/Item-List';
import AddItemForm from './Components/Item/AddItem';

const DUMMY = [];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(DUMMY);
  const [editItem, setEditItem] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItemHandler = (itemName) => {
    setItems((prevItems) => [...prevItems, { id: Math.random().toString(), name: itemName }]);
    closeModal();
  };

  const deleteItemHandler = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleEditItem = (item) => {
    setEditItem(item);
  };
  const handleUpdateItem = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditItem(null); // Close modal after update
  };

  return (
    <div className="App">
      {!isModalOpen && <Header onAddNew={openModal} />}
      <Modal isOpen={isModalOpen} onClose={closeModal} onAddItem={addItemHandler} editItem={editItem} onUpdate={handleUpdateItem} />
      <div className="items-container">
        {items.map((item) => (
          <ItemList key={item.id} name={item.name} onEdit={() => handleEditItem(item)} onDelete={() => deleteItemHandler(item.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
