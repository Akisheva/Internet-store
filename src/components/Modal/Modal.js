import React from 'react';
import PropTypes from "prop-types";

import "./modal.scss"

const Modal = ({showModal,modalConfig}) => {
    const {text, actions} = modalConfig
       
        return(            
            <div className='modal-wrapper' onClick = {showModal}>
                <div className='modal-window'>
                    <p className='content' role='text-container'>{text}</p>
                    <span className = "close-btn" onClick = {showModal}></span>
                    {actions}
                </div>
            </div>
        )
}

Modal.propTypes = {
    showModal: PropTypes.func, 
    modalConfig: PropTypes.object
}
export default Modal;