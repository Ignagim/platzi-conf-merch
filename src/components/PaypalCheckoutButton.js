import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import handleSumTotal from "../utils/handleSumTotal";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = props => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer, products} = state;
    const navigate = useNavigate()
    const { product } = props

    return <PayPalButtons 
        onApprove={(data,actions) => {
            const newOrder = {
                buyer,
                products: cart,
                payment: data,
            }
            addNewOrder(newOrder)
            navigate('/checkout/succes')
        }}
        createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: handleSumTotal(cart)
                  }
                }
              ]
            });
          }}
    />
}

export default PaypalCheckoutButton;