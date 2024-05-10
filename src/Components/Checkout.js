import React from 'react'
import Burger from './Burger'
import './Checkout.css'
import { useState } from 'react';
import OrderForm from './OrderForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../States/index';
export default function Checkout() {
    const [ContinueButton, setContinueButton] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch);
    const handleContinue = () => {
        setContinueButton(true);
      };
      const handleCancel = () => {
        action.updateIngrediants({
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
          });
          action.resetTotal(3);
          navigate('/');
      };
  return (
    <div>
        <div className='text-div'>
            <h1>We hope it tastes well!</h1>
        </div>
        <Burger/>
        <div className='buttons-container'>
            <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
            <button className='continue-btn' onClick={handleContinue}>Continue</button>
        </div>
        {ContinueButton && <OrderForm/>} {}
    </div>
  )
}
