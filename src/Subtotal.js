import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom'
// import CurrencyFormat from 'react-currency-format'

function Subtotal() {

  //const history = useHistory();
  const [{basket, user}, dispatch]=useStateValue();
  return (
    <div className='subtotal'>
        <p>
            Subtotal ({basket?.length} items): <strong>$ {getBasketTotal(basket)}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type='checkbox'/>This order contains a gift
        </small>
        <button>
            <Link to='/payment'>Proceed to Checkout</Link>
        </button>
        {/* <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal (0 items): <strong>0</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox'/>This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayTree={'text'}
            thousandSeparator={true}
            prefix={'£'}
        /> */}
    </div>
  )
}

export default Subtotal
