// App.js
import React, { useState } from 'react';
import { ItemContextProvider } from '../src/Components/Item/ItemContext';
import Header from './Components/Header/Header';
import ItemList from './Components/Item/Item-List';
import Modal from './Components/Modal/Modal';

function App() {
  return (
    <ItemContextProvider>
      <div className="App">
        <Header />
        <ItemList />
        <Modal />
      </div>
    </ItemContextProvider>
  );
}

export default App;
