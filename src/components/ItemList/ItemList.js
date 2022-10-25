import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";

import {ReactComponent as IconCart} from "./img/cart.svg"
import {ReactComponent as IconFavorite} from "./img/favoriteN.svg"

import { selectInFavorite, selectCardById } from '../../store/selectors';
import { setInCart } from '../../store/actions';

import "./itemList.scss"

const ItemList = ({cardId, addRemoveFavorite, showModal})=> {
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

    return (
        <div className='card-wrapper' id = {cardId}>
            <div className='card-item-list'>
            <div className='img-block'>
                <a href='./'>
                    <div className='card-item-list__img'>
                        <img src={url} alt={name}/>
                    </div>                        
                </a>
                 
                <div className='card-item-list__vendor'>{vendorCode}</div>
                
                </div>
                <div className='content-block'>
                <div className='card-item-list__icons'>                       
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
                <div className='card-item-list__name'>{name}</div>
                <div className='card-item-list__power'>{power}</div>
                <div className='card-item-list__price'>{price} грн</div>
                </div>
            </div>
        </div>
        )
}
ItemList.propTypes = {
    cardId: PropTypes.number,
    showModal: PropTypes.func,
    addRemoveFavorite: PropTypes.func
}

export default ItemList