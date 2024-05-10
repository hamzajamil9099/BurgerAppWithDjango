import React from 'react';
import './Modal.css';
import { useSelector } from 'react-redux';
const Modal = ({ show, handleClose, handleContinue}) => {
  const total = useSelector (state => state.total);
  const items = useSelector (state => state.items);
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const displayItems = () => {
    return Object.entries(items).map(([key, value]) => (
      <li key={key}>
        {key}: {value}
      </li>
    ));
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Your Order Summary</h2>
        <ul>
          {displayItems()}
        </ul>
        <p>Total Price: {total}</p>
        <p>Do you want to continue?</p>
        <div className="modal-buttons">
          <button className="continue-btn" onClick={handleClose}>Cancel</button>
          <button className="cancel-btn" onClick={handleContinue}>Continue</button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
