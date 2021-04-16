import React from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

export default function Birdsandbees() {
  let history = useHistory();

  return (
    <div>
      <h1>What's on your mind?</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required*';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required*';
          }
          return errors;
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
        // }}

        onSubmit={() => {
          history.push('/success');
          console.log('hi');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter email"
            />
            <p
              style={{
                color: 'red',
              }}
              className="error"
            >
              {errors.email && touched.email && errors.email}
            </p>
            <input
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Enter password"
            />
            <p style={{ color: 'red' }} className="error">
              {errors.password && touched.password && errors.password}
            </p>
            <button
              type="submit"
              className="button"
              to="/success"
              // disabled={isSubmitting}
            >
              Submit
            </button>
            {/* <div className="mt50">
              <Link
                className="button"
                disabled={isSubmitting}
                to="/success"
                type="submit"
              >
                Submit
              </Link>
            </div> */}
          </form>
        )}
      </Formik>
    </div>
  );
}
