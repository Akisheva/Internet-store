import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import { selectInFavorite } from '../../store/selectors'

import ItemCard from '../../components/ItemCard';



import './Favorite.scss';

const Favorite = ({addRemoveFavorite} ) => {
    
    const inFavorite = useSelector(selectInFavorite);
    
    return (
        <div className='favorite-page'>
            <p className='favorite-page__title'>Ваші улюблені товари</p>
            <div className='cards-wrapper'>
                {inFavorite.map((cardId, index) => {
                     return (<ItemCard 
                            cardId={cardId} 
                            key = {index}                         
                            addRemoveFavorite = {addRemoveFavorite}
                            />)
                    }
           ) }
            </div>
        </div>   
    )

}
ItemCard.propTypes = {
    addRemoveFavorite: PropTypes.func 
}
export default Favorite