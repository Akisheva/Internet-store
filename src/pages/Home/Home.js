import React, { useEffect, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cs from 'classnames';

import { selectCards, selectShow } from '../../store/selectors';

import ItemCard from '../../components/ItemCard';
import ItemList from '../../components/ItemList/ItemList';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import {ReactComponent as IconList} from './iconList.svg';
import {ReactComponent as IconGallery} from './iconGallery.svg'
import { ThemeContext } from '../../context/index'

import { fetchCards } from '../../store/actions';

import './Home-cards.scss'


const Home = ({addRemoveFavorite, showModal}) => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards)
    const show = useSelector(selectShow);

    useEffect(() => {
        return () => {
            dispatch(fetchCards())
        }
    },[]);

    const modalConfig = {
        text: "Товар додано до кошику",
        actions: (<Button className='modal-button' text = "Ok" onclick = {showModal}/>)
    } 
    const {theme, listTheme, galleryTheme} = useContext(ThemeContext);
    console.log('theme', theme)
    
    return (
        <> 
            <div className='theme-icons'> 
            <IconList id ='list' className='cards-wrapper__icon-list' onClick = {listTheme} />
            <IconGallery id = 'gallery' className='cards-wrapper__icon-list' onClick ={galleryTheme}/>
            </div>
            <div className={theme==='gallery' ? cs ('cards-wrapper') : ('cards-wrapper cards-list')}>
            
                {cards && theme === 'gallery' && cards.map((card, index) => {
                return (<ItemCard 
                            cardId={card.cardId} 
                            key = {index} 
                            addRemoveFavorite = {addRemoveFavorite}
                            showModal = {showModal}
                        />)
             }
            ) }
                {cards && theme === 'list' && cards.map((card, index) => {
                return (<ItemList
                            cardId={card.cardId} 
                            key = {index} 
                            addRemoveFavorite = {addRemoveFavorite}
                            showModal = {showModal}
                        />)
            }
           ) }
           {show && <Modal showModal = {showModal} modalConfig = {modalConfig} />}
        </div> 
        </>
    )
}
export default Home;