import * as Yup from 'yup';

const addressRegex = /^[a-zA-Z0-9][a-zA-Z0-9 .,-]*$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  address1: Yup.string()
    .min(2, 'Must be at least ${min} characters')
    .max(40, 'Must be no more than ${max} characters')
    .matches(
      addressRegex,
      'May only contain hyphens, periods, commas or alphanumeric characters',
    )
    .required('Address is required'),
  address2: Yup.string()
    .nullable()
    .max(40, 'Must be no more than ${max} characters')
    .matches(addressRegex, {
      excludeEmptyString: true,
      message:
        'May only contain hyphens, periods, commas or alphanumeric characters',
    }),
  city: Yup.string()
    .max(15, 'Must be no more than ${max} characters')
    .matches(
      addressRegex,
      'May only contain hyphens, periods, commas or alphanumeric characters',
    )
    .required('City is required'),
});

export const validationSchemaCryptoOptions = Yup.object().shape({
  crypto: Yup.string().required('Required'),
  amount: Yup.string().required('Required'),
  terms: Yup.bool().oneOf([true], 'Accept terms is required'),
  risk: Yup.bool().oneOf([true], 'Accept risk is required'),
});

export const validationSchemaSendFunds = Yup.object().shape({
  send: Yup.string().required('Address is not valid!'),
  amount: Yup.number()
    .typeError('Please enter number value only')
    .positive('Must be a positive number.')
    .required(
      'The amount that you entered is invalid. Please enter an amount which is less or equal to your available balance.',
    ),
});

export const validationSchemaRegistration = Yup.object().shape({
  password: Yup.string()
    .required(
      'Create your password using 8 characters or more. It MUST include at least one uppercase character, lowercase character, number and symbol.',
    )
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   'Create your password using 8 characters or more. It MUST include at least one uppercase character, lowercase character, number and symbol.',
    // ),
    .matches(/^.*$/),
  passConfirm: Yup.string()
    .required('Please enter your password')
    .oneOf([Yup.ref('password'), null], 'Password is don`t match.'),
});

export const validationSchemaLogin = Yup.object().shape({
  password: Yup.string().required('* Password cannot be empty'),
});

export const validationSchemaChangePassword = Yup.object().shape({
  currentPassword: Yup.string().required('Current passwords is not valid.'),
  newPassword: Yup.string()
    .required(
      'Create your password using 8 characters or more. It MUST include at least one uppercase character, lowercase character, number and symbol.',
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Create your password using 8 characters or more. It MUST include at least one uppercase character, lowercase character, number and symbol.',
    ),
  retypePassword: Yup.string()
    .required('Please enter your new password')
    .oneOf([Yup.ref('newPassword'), null], 'New passwords don`t match.'),
});

export const validationSchemaFingerprintVerification = Yup.object().shape({
  currentPassword: Yup.string().required('* Wrong password'),
});
