import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import { setInFavorite, setShow, removeFromFavorite } from './store/actions'; 
import { selectInCart, selectInFavorite, selectShow } from './store/selectors';

import Layout from './pages/Layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import ErrorPage from './pages/ErrorPage';


const App = () => {
  
  const dispatch = useDispatch();
  const inFavoriteStore = useSelector (selectInFavorite);
  const inCart = useSelector(selectInCart);
  
  useEffect(() => {
    localStorage.setItem(
      "inCart",
      JSON.stringify(inCart)
      )},[inCart]);
  useEffect(() => {    
    localStorage.setItem(
      "inFavorite",
      JSON.stringify(inFavoriteStore)
      );
  },[inFavoriteStore]);
 
  const addRemoveFavorite = (cardId) => {
    if (inFavoriteStore.includes(cardId)){ 
        let newFavorite = inFavoriteStore.filter(id => id !== cardId);
        dispatch(removeFromFavorite(newFavorite))
    } else {
        dispatch(setInFavorite(cardId))
        }
  } 

  let show = useSelector(selectShow);
    const showModal = () => {
      show? dispatch(setShow(false)) : dispatch(setShow(true))
    };  

    return(
      <Routes>
        <Route path = '/' element = {<Layout/>}> 
          <Route index element = {<Home addRemoveFavorite = {addRemoveFavorite} showModal={showModal}/>}/>
                                    
          <Route path = '/cart' element = {<Cart addRemoveFavorite = {addRemoveFavorite} showModal={showModal}/>}/>
          <Route path = '/favorite' element = {<Favorite addRemoveFavorite = {addRemoveFavorite}/>}/>
          <Route path = '*' element = {<ErrorPage/>}/>
        </Route>  
      </Routes>
    )
}
export default App;
