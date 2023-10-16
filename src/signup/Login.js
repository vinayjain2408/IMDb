import React, { useState, useEffect } from 'react';
import './Login.css';
import { useFormik } from 'formik';
import { signUpSchema } from './schema/Regex';
import Home from '../Home';
import { v4 as uuidv4 } from 'uuid';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
};

function Login() {
  const [condition, setCondition] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  // Initialize authToken from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setAuthToken(storedToken);
    //   setCondition(true);
    }
  }, []);

  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    values, // Get the 'values' state from useFormik
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (formValues) => {
      // Simulate a successful login
      const token = uuidv4();
      localStorage.setItem('authToken', token);
      localStorage.setItem('formValues', JSON.stringify(formValues));
      setAuthToken(token);
    //   setCondition(true);
    },
  });

  // Function to log out
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
    // setCondition(false);
  };

  return authToken ? (
    <div>
      <Home />
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div className="form-validation">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.name && touched.name ? <p>{errors.name}</p> : null}

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.email && touched.email ? <p>{errors.email}</p> : null}

        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}

        <input
          type="password"
          placeholder="Enter Confirm password"
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.confirm_password && touched.confirm_password ? (
          <p>{errors.confirm_password}</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;





// import React, { useState } from 'react';
// import './Login.css';
// import { useFormik } from 'formik';
// import { signUpSchema } from './schema/Regex';
// import Home from '../Home';
// import { useEffect } from 'react';

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
//   confirm_password: '',
// };

// function Login() {
//     const [value , setValues] = useState([])
// console.log(value)
//   const [condition, setCondition] = useState(false);
//   useEffect(() => {
//     const storedValues = JSON.parse(localStorage.getItem('formValues')) || initialValues;
//     setValues(storedValues);
//   }, []);
//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: initialValues,
//     validationSchema: signUpSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       localStorage.setItem('formValues', JSON.stringify(values));
//       // You can perform further actions here, and when you want to set the condition to true, use setCondition(true).
//       setCondition(true);
//     },
//   });

//   return condition ? (
//     <Home />
//   ) : (
//     <div className="form-validation">
//       <h1>Form Validation</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           name="name"
//           value={values.name}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         /><br />
//         {errors.name && touched.name ? <p>{errors.name}</p> : null}

//         <input
//           type="email"
//           placeholder="Enter Email"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         /><br />
//         {errors.email && touched.email ? <p>{errors.email}</p> : null}

//         <input
//           type="password"
//           placeholder="Enter password"
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         /><br />
//         {errors.password && touched.password ? <p>{errors.password}</p> : null}

//         <input
//           type="password"
//           placeholder="Enter Confirm password"
//           name="confirm_password"
//           value={values.confirm_password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         /><br />
//         {errors.confirm_password && touched.confirm_password ? (
//           <p>{errors.confirm_password}</p>
//         ) : null}

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

