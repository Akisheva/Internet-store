import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";

import { selectCards, selectInCart, selectShow } from '../../store/selectors';
import { removeFromCart } from '../../store/actions';

import ItemCard from "../../components/ItemCard";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import SignupForm from "../../components/Form/Form";
import './Cart.scss'

const Cart = ({showModal,addRemoveFavorite}) => {

    const [selected, setSelected] = useState();
    const [form, setForm] = useState(false);
    const [isOrdered, setIsOrdered] = useState(false);

    const inCart = useSelector(selectInCart);
    const cards = useSelector(selectCards);
    const selectedCard = (cardId) => setSelected(cardId) ;
    const show = useSelector(selectShow);   
    const dispatch = useDispatch();

    const removeCard = () => {
        const cardId = selected;
        let newCart = [...inCart];
        const index = newCart.indexOf(cardId);
        if (index > -1) { 
            newCart.splice(index, 1);
        }
        dispatch(removeFromCart(newCart))
        }  
    
    let cardsInCart = []
    inCart.forEach(id => {
        let searchingCard = cards.find(card => card.cardId === id);
        cardsInCart.push(searchingCard)
    });

    const consoleLogOrderedItems = () => {
        console.log(cartGroupById)
    }
    
    const cartGroupById = Object.values(cardsInCart.reduce((value, object) => {
        if (value[object.cardId]) {
            value[object.cardId].counter++;      
        } else {
            value[object.cardId] = { ...object , counter : 1 };
        }
        return value;
    }, {})); 

    const modalConfig = {
        text: "Ви дійсно хочете видалити товар?",
        actions: (<><Button className='modal-button' text = "Ok" onclick = {removeCard}/>
                    <Button className='modal-button' text = "Cancel" onclick = {showModal}/></>)
    }

    const showForm = () => {setForm(!form)};

    return(
        <> 
        <div className='cart-page'>
            {!!inCart.length && <> 
                <p className='cart-page__title'>Товари у кошику</p>
                <div className="btn-wrapper"> <Button text = "Оформити замовлення" 
                    className = "btn btn-order" 
                    onclick = {showForm}/> 
                </div> </>}
            {!inCart.length && !isOrdered && <p className='cart-page__title'>Ваш кошик пустий</p>}
            {isOrdered && <p className='cart-page__title'>Дякуємо! Ваше замовлення прийняте</p>} 
            <div className='cards-wrapper'>
                {cartGroupById.map((item, index) => {
                     return (
                        <div className="cart-page__item" key = {index}>
                            <ItemCard 
                            cardId={item.cardId} 
                            addRemoveFavorite = {addRemoveFavorite}
                            />
                            <div id = {`btn-${item.cardId}`}>
                                <p className="item-amount">{item.counter} шт.</p>
                                <Button text = "Видалити" 
                                        className = "remove-item" 
                                        onclick = {() =>{showModal(); selectedCard(item.cardId)}}/>
                            </div>
                        </div>    
                            )
                    }
           ) }
           {show && <Modal showModal = {showModal} modalConfig = {modalConfig} />}
            </div>
        </div> 
        {form && <SignupForm consoleLogOrderedItems={consoleLogOrderedItems} setForm = {setForm} setIsOrdered = {setIsOrdered}/>}  
        </>
    )
}

export default Cart

ItemCard.propTypes = {
    addRemoveFavorite: PropTypes.func,
    showModal: PropTypes.func
}
