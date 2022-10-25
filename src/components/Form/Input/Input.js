import React from 'react';
import {Field,ErrorMessage} from 'formik';
import cx from 'classnames';
import PropTypes from "prop-types";

import './Input.scss'

const Input = ({type,placeholder,label,name,className,error, ...restProps}) => {
  
  return(
    <label className={cx("form-item",className,{'has-validation':error})}>
        <p className="form-label">{label}</p>
        <Field type={type} className="form-control" name={name} {...restProps} placeholder={placeholder} />
         <ErrorMessage className="error-message" name={name} component={'p'}/>
  </label>
  )
}
Input.defaultProps = {
  type:'text'
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
//   error: PropTypes.object
}

export default Input;




