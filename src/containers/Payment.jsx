import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PaypalCheckoutButton from '../components/PaypalCheckoutButton';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer, products } = state;
    const navigate = useNavigate()

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
                    {/* <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onSuccess={data => handlePaymentSucces(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    /> */}
                    <PaypalCheckoutButton 
                        product={products.price}   
                    />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Payment;