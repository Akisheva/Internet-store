import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";

import {ReactComponent as IconCart} from "./img/cart.svg"
import {ReactComponent as IconFavorite} from "./img/favoriteN.svg"

import { selectInFavorite, selectCardById } from '../../store/selectors';
import { setInCart } from '../../store/actions';

import "./item.scss"


const ItemCard = ({cardId, addRemoveFavorite, showModal})=> {
    const dispatch = useDispatch();
    const card = useSelector(state => selectCardById(state, cardId));
    const inFavoriteStore = useSelector (selectInFavorite);
    
    const addToCart = (cardId) => {
        dispatch(setInCart(cardId))
        } 
    
    const {name, price, vendorCode, url, power} = card;

    const [isFavorite, setIsFavorite] = useState(false);
    
    const changeIsFavorite = (cardId) => {
        setIsFavorite(!isFavorite);
    }
    useEffect(() => {
        if (inFavoriteStore.includes(cardId)) {
            changeIsFavorite(cardId)
        }
    },[])

    // const Theme = useContext(ThemeContext);
    
    
    return (
        <div className='card-wrapper' id = {cardId}>
            <div className='card-item'>
                <a href='./'>
                    <div className='card-item__img'>
                        <img src={url} alt={name}/>
                    </div>                        
                </a>
                <div className='card-item__vendor'>{vendorCode}</div>
                <div className='card-item__price'>{price} грн</div>
                <div className='card-item__icons'>                       
                    <IconFavorite id = {`icon-${cardId}`}                             
                    className={isFavorite? 'icon-favorite isFavorite': 'icon-favorite'}
                            onClick={() => {
                                addRemoveFavorite(cardId);
                                changeIsFavorite(cardId)
                    }}
                    />
                     <IconCart onClick = {() => {
                                 showModal();
                                 addToCart(cardId)}}
                                 />
                </div>
                <div className='card-item__name'>{name}</div>
                <div className='card-item__power'>{power}</div>
            </div>
        </div>
        )
}
ItemCard.propTypes = {
    cardId: PropTypes.number,
    showModal: PropTypes.func,
    addRemoveFavorite: PropTypes.func
}

export default ItemCard