import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import AddItemForm from '../Item/AddItem';

const Modal = ({ isOpen, onClose, onAddItem, editItem, onUpdate }) => {
  const [name, setName] = useState('');
//   if (!isOpen) return null;

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onUpdate({ ...editItem, name });
  };

  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <AddItemForm
          onAddItem= {onAddItem}
          itemName={name}
          onItemNameChange={(newName) => setName(newName)}
          onSubmit={handleSubmit}
          onCancel={onClose}
        />
      </div>
    </div>
  ) : null;
};

export default Modal;
