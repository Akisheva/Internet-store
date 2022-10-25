import React from 'react';
import PropTypes from "prop-types";

import "./button.scss"

const Button = ({text,className, onclick}) => {

    return(
        <button className={className} 
                type="submit"
                onClick = {onclick}
                >{text}</button>
    ) 
}

Button.propTypes = {
    showModal: PropTypes.func
}
    
export default Button    