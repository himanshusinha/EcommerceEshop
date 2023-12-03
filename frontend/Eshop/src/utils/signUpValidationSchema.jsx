import * as yup from 'yup';

const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),

  username: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_]{3,20}$/,
      'Username must be 3-20 characters long and can contain only letters, numbers, and underscores',
    )
    .required('Username is required'),

  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('Password is required'),

  mobile: yup
    .string()
    .matches(
      /^[0-9]{10}$/,
      'Enter a valid mobile username with exactly 10 numeric characters',
    )
    .required('Mobile username is required'),

  address: yup.string().required('Address is required'),

  city: yup.string().required('City is required'),

  country: yup.string().required('Country is required'),

  pinCode: yup
    .string()
    .matches(/^[0-9]{6}$/, 'Enter a valid 6-digit pin code')
    .required('Pin code is required'),
});

export default signUpValidationSchema;
