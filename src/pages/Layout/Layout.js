import { Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

import {selectInCart, selectInFavorite} from "../../store/selectors"

import './layout.scss'

const Layout = () => {
    const inCart = useSelector(selectInCart);
    const inFavorite = useSelector(selectInFavorite);
    return (
        <div className="page-wrapper">
        <Header inCart = {inCart}
                inFavorite = {inFavorite}/>
        <div className="main">
            <Outlet/>
        </div>
        
        <Footer/>
        </div>
    )
}

export default Layout