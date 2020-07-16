import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const STripeCheckoutButton=({price})=>{
    const priceForSTripe = price*100;
    const publishableKey = "pk_test_GnLIcIzlZgikCvlicU1DZRAi009oysWNlu"

    const onToken = token =>{ 
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForSTripe,
                token
            }
        }).then(res =>{
            alert('Payment Successful');
        }).catch(err=>{
            console.log('Payment Failure : ', JSON.parse(err));
            alert('there was an issue with the payment. please provide the right credentials');
        })
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