import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .matches(/[0-9]/, "Your password must have at least 1 digit character")
    .matches(/[a-z]/, "Your password must have at least 1 lowercase character")
    .matches(/[A-Z]/, "Your password must have at least 1 uppercase character")
    .matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain  One Special Case Character")
    // .matches(/[!@#%&*=*/]/, "Your password must have at least 1 Special character")
    .min(8, "Password must have at least 8 characters")
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});