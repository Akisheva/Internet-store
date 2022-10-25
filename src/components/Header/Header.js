import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {ReactComponent as IconLogo} from "./img/logo.svg"
import {ReactComponent as IconFavorite} from "./img/favorite.svg"
import {ReactComponent as IconCart} from "./img/cart.svg"
import './header.scss'

const Header = ({inCart, inFavorite}) => {
    let itemsInCart;
    if (inCart.length > 0){
        itemsInCart = inCart.length
    }
    let itemsInFavorite;
    if (inFavorite.length > 0){
        itemsInFavorite = inFavorite.length}
    return(
        <header className='header'>
            <Link to="/">
                <IconLogo/> 
            </Link>
            <div className='header__slogan'>Продукція Макіта від офіційного дилера</div>
                <div className='header__icons'>
                    <Link to="/favorite">
                        <IconFavorite className='header__icons-favorite'/>
                        <div id='favorite'>{itemsInFavorite}</div>
                    </Link>
                    <Link to="/cart">
                        <IconCart className='header__icons-cart'/>
                        <div id='cart'>{itemsInCart}</div>
                    </Link>
            </div>                
        </header>
        )
   }

Header.propTypes = {
    inCart: PropTypes.array,
    inFavorite: PropTypes.array
}
export default Header 