import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function Payment() {

  const [{basket,user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout(
                    <Link to='/checkout'>{basket?.length} items</Link>
                )
            </h1>
            {/* Delivery Address */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>User Email</p>
                    <p>Address Line 1</p>
                    <p>Address Line 2</p>
                </div>
            </div>
            {/* Review Items */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* Payment Method */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <h3>Card Details</h3>
                    <div className='inputs'>
                        <CreditCardIcon className='cci'/>
                        <input className='card_number' type='text' placeholder='Card Number'/>
                        <input className='month' type='text' placeholder='MM/YY'/>
                        <input className='cvc' type='password' placeholder='CVC'/>
                    </div>
                    <div className='order_total'>
                        <strong>Order Total: $ {getBasketTotal(basket)}</strong>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
