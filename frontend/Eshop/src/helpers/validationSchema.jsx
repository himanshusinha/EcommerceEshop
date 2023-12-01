import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  zipCode: Yup.string().required('Zip Code is required'),
});
export default validationSchema;
