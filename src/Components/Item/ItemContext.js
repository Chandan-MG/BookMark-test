
import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentItem(null);
  };

  const addItem = (name) => {
    const newItem = { id: Math.random().toString(), name };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setCurrentItem(item);
    openModal();
  };

  const updateItem = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <ItemContext.Provider
      value={{ items, isOpen, currentItem, openModal, closeModal, addItem, deleteItem, editItem, updateItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};
