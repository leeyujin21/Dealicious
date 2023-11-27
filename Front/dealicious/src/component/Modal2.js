import React, { useState } from 'react';
import Modal from './Modal';

const Modal2 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Modal Content</h2>
          <p>This is a modal example using createPortal.</p>
        </Modal>
      )}
    </div>
  );
};

export default Modal2;