import React from "react";
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";

import { validationSchema } from "./validation";
import {removeFromCart} from '../../store/actions'
import Input from "./Input";
import Button from "../Button";

import './Form.scss'

const SignupForm = ({consoleLogOrderedItems, setForm, setIsOrdered}) => {
    const dispatch = useDispatch()

    return (
    <Formik
      initialValues = {{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
      }}
      validationSchema = {validationSchema}
      onSubmit = {(values) => {
        setForm(false);
        dispatch(removeFromCart([]));
        setIsOrdered(true);
        console.log ('Придбані товари');
        consoleLogOrderedItems();
        console.log ('User contact info', values)
        }}
      
    >
      {({ errors, touched, handleSubmit }) => (
        <form className = 'contact-form' onSubmit={handleSubmit}>
            <legend>To place your order, please fill out the contact info </legend>
            <div className="row">
                <Input
                  name="firstName"
                  placeholder="First name"
                  className="mb-3"
                  label="First name"
                  error={errors.firstName && touched.firstName}
                />
                <Input
                  name="lastName"
                  placeholder="Last name"
                  className="mb-3"
                  label="Last name"
                  error={errors.lastName && touched.lastName}
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="mb-3"
                    label="Email"
                    error={errors.email && touched.email}
                />
                <Input
                    name="phone"
                    type="number"
                    placeholder="380"
                    className="mb-3"
                    label="Phone"
                    error={errors.phone && touched.phone}
                />
                <Input
                    name="address"
                    placeholder="Postcode, city, street, number"
                    label="Address"
                    error={errors.address && touched.address}
                />              
            </div>
            <div className="col-6">
				<Button className="btn btn-checkout" text='Checkout'/>
			</div>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;

SignupForm.propTypes = {
    consoleLogOrderedItems: PropTypes.func,
    setForm: PropTypes.func,
    setIsOrdered: PropTypes.func
}
