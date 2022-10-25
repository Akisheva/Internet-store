import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	firstName: yup
		.string('Enter your name')
		.min(3, 'The name is too short!')
		.max(15, 'The name is too long!')
		.required('Name is required'),

    lastName: yup
		.string('Enter your last name')
		.min(3, 'The last name is too short!')
		.max(15, 'The last name is too long!')
		.required('Last name is required'),
    address: yup
		.string()
		.min(10, 'The address is too short!')
		.max(200, 'The address is too long!')
		.required('Address is required'),
	email: yup
		.string()
		.email('Invalid email')
		.required('Email is required'),
	phone: yup
		.number('Invalid phone number')
		.required('Phone is required'),
	
});