import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./payment.css"

const Payment = () => {
  return (
    <div className="App-body">
      
      <PayPalScriptProvider
        options={{ "client-id": "Acj1VdHME7amJOPlV6PZ3IgYinFKCvXmklaDD93kneItEUWsvCSgZ_0zZAnh9HGMVmWQQcK-5BSFBI8A"}}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default Payment  