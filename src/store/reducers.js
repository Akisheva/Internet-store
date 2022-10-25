import {createReducer} from '@reduxjs/toolkit';

import * as actions from './actions';

const localStItemsFavorite = localStorage.getItem("inFavorite") ? JSON.parse(localStorage.getItem("inFavorite")) : [];
  const localStItemsCart = localStorage.getItem("inCart") ? JSON.parse(localStorage.getItem("inCart")) : [];

export const defaultState = {
    cards: [],
    inCart: localStItemsCart,
    inFavorite: localStItemsFavorite,
    show: false,
}

export default createReducer(defaultState, {
    [actions.setShow]: (state, {payload}) => {
        state.show = payload;
    },
    [actions.setCards]: (state, {payload}) => {
        state.cards = payload
    },
    [actions.setInCart]:  (state, {payload}) => {
        state.inCart = [...state.inCart, payload]
    },
    [actions.removeFromCart]:  (state, {payload}) => {
        state.inCart = payload
    },
    [actions.setInFavorite]:  (state, {payload}) => {
        state.inFavorite = [...state.inFavorite, payload]
    },
    [actions.removeFromFavorite]:  (state, {payload}) => {
        state.inFavorite = payload
    }
}

)
