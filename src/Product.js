import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function Product({id, title, owner,  image, price, rating, }) {
  
  const [state, dispatch]=useStateValue();

  //console.log(basket)

  const addToBasket = () => {
      dispatch({
        type:'ADD_TO_BASKET',
        item:{
          id: id,
          title: title,
          owner: owner,
          image: image,
          price: price,
          rating: rating
        },
      })
  }

  return (
    <div className='product'>
        <div className='product_info'>
            <p className='product_title'>{title}</p>
            <p><small>{owner}</small></p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating)
                  .fill()
                  .map((_,i) =>
                  (<p><StarIcon/></p>))
                }
            </div>
        </div>
        <img className='product_image' src={image} alt=" "/>
        <button className='btn' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
