import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal';

function PaypalCheckoutButton() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  return (
    <PayPalButtons
      onApprove={(data) => {
        const newOrder = {
          buyer,
          products: cart,
          payment: data,
        };
        addNewOrder(newOrder);
        navigate('/checkout/succes');
      }}
      createOrder={(data, actions) =>
        actions.order.create({
          purchase_units: [
            {
              amount: {
                value: handleSumTotal(cart),
              },
            },
          ],
        })
      }
    />
  );
}

export default PaypalCheckoutButton;
