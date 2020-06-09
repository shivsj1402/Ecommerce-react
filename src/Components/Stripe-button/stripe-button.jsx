import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const STripeCheckoutButton=({price})=>{
    const priceForSTripe = price*100;
    const publishableKey = "pk_test_GnLIcIzlZgikCvlicU1DZRAi009oysWNlu"

    const onToken = token =>{ 
        console.log(token)
        alert("Payment Successfull!")
    }

    return(
        <StripeCheckout 
        label="Pay Now"
        name ="CROWN CLOTHING"
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description={`Your Total is ${price}`}
        amount={priceForSTripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )

}

export default STripeCheckoutButton;