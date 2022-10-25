export const selectCards = (state) => state.cards;
export const selectCardById = (state, cardId) => {
    return state.cards.find(card => card.cardId === cardId)
}
export const selectInCart = (state) => state.inCart;
export const selectInFavorite = (state) => state.inFavorite;
export const selectShow = (state) => state.show;
