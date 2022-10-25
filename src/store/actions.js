import {createAction} from '@reduxjs/toolkit';

import {sendRequest} from '../helpers/sendrequest';

export const setCards = createAction('SET_CARD');
export const setShow = createAction('SET_SHOW');
export const setInCart = createAction('SET_IN_CART');
export const removeFromCart = createAction('REMOVE_FROM_CART')
export const setInFavorite = createAction('SET_IN_FAVORITE')
export const removeFromFavorite = createAction('REMOVE_FROM_IN_FEVORITE')

export const fetchCards = () => (dispatch) => {
    return sendRequest("./cardsArr.json")
    .then (({cards}) => {
      dispatch(setCards(cards))
    })
}