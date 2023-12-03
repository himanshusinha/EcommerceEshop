import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('Password is required'),
});

export default loginValidationSchema;
