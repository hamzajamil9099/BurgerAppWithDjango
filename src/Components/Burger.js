import React from 'react';
import './Burger.css';
import { useSelector } from 'react-redux';
const Burger = () => {
  const items = useSelector(state=> state.items);
  const renderIngredients = () => {
    const ingredients = [];
    for (let ingredient in items) {
      for (let i = 0; i < items[ingredient]; i++) {
        ingredients.push(<div key={ingredient + i} className={ingredient}></div>);
      }
    }

    return ingredients.length > 0 ? ingredients : <p><b>No Ingredients Added</b></p>;
  };

  return (
    <div className='Burger'>
      <div className="box">
        <div className="bread-top">
            <div className="seeds"></div>
            <div className="seeds2"></div>
        </div>
        {renderIngredients()}
        <div className="bread-bottom" />
      </div>
    </div>
  );
};

export default Burger;
