import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import handleSumTotal from '../utils/handleSumTotal';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const navigate = useNavigate()

    const paypalOptions = {
        clientId: process.env.REACT_APP_CLIENT_ID,
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    }

    const handlePaymentSucces = (data) => {
        if(data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                products: cart,
                payment: data,
            }
            addNewOrder(newOrder)
            navigate('/checkout/succes')
        }
    }

    return(
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div key={item.title} className="Payment-item">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                    </div>
                ))}
                <div className="Payment-button">     
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onSuccess={data => handlePaymentSucces(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Payment;