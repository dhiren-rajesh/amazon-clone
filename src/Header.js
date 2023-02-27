import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket, user}, dispatch]=useStateValue();
  return (
    <div className='header'>
        <Link to='/'><img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon-logo'/></Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
          <Link to='/login'>
            <div className='header_option'>
              <span className='header_optionOne'>Hello Guest</span>
              <span className='header_optionTwo'>Sign In</span>
            </div>
          </Link>
            <div className='header_option'>
              <span className='header_optionOne'>Return</span>
              <span className='header_optionTwo'>& Orders</span>
            </div>
            <div className='header_option'>
              <span className='header_optionOne'>Your</span>
              <span className='header_optionTwo'>Prime</span>
            </div>
            <Link to='/checkout'>
              <div className='header_optionBasket'>
                <ShoppingCartIcon/>
                <span className='header_optionTwo header_basketCount'>{basket?.length}</span>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Header
