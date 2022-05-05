import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PaypalCheckoutButton from '../components/PaypalCheckoutButton';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, products } = useContext(AppContext);
  const { cart } = state;
  const navigate = useNavigate();
  console.log(cart);
  console.log(products);
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.attributes.title} className="Payment-item">
            <h4>{item.attributes.title}</h4>
            <span>${item.attributes.price}</span>
          </div>
        ))}
        <div className="Payment-button">
          <PaypalCheckoutButton product={products.attributes} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
