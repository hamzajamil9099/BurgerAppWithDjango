import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector (state => state.isLoggedIn)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:8000/orders/', {
          method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Token ${token}`
              },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="orders-container">
      {orders.map((order, index) => (
        <div key={index} className="order-box">
          <div className="order-info">
            <p>Ingredients:</p>
            <div className="ingredient-list">
              <div className="ingredient-item">
                <span>Lettuce: {order.lettuce}</span>
              </div>
              <div className="ingredient-item">
                <span>Bacon: {order.bacon}</span>
              </div>
              <div className="ingredient-item">
                <span>Cheese: {order.cheese}</span>
              </div>
              <div className="ingredient-item">
                <span>Meat: {order.meat}</span>
              </div>
            </div>
            <p>Price: <b>USD {order.total}</b></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
