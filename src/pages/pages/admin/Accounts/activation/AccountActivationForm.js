import React, { useContext } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import NotyfContext from "../../../../../contexts/NotyfContext";

const AccountActivationForm = () => {
  const notyf = useContext(NotyfContext);
  const ActivateAccount = async (email, password) => {
    try {
      const response = await axios.post("activate_account", {
        email,
        password,
      });
      return { status: response.status, message: response.data };
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
        user_email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("User email is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
        try {
          const activation = await ActivateAccount(
            values.email,
            values.password
          );

          console.log(activation);

          setStatus({ success: true });

          if (activation.status === 200) {
            notyf.success(activation.message);
          }
        } catch (e) {
          console.log(e);
          let message = e.message || "something went wrong while activating";
          if (e.message === "activation is undefined") {
            message = "Could not connect to Server";
          }

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,

        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <Form onSubmit={handleSubmit}>
          {errors.submit && (
            <Alert className="my-3" variant="danger">
              <div className="alert-message">{errors.submit}</div>
            </Alert>
          )}

          <Form.Group classname="mb-5">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              name="email"
              placeholder="Account email"
              value={values.email}
              isInvalid={Boolean(touched.email && errors.email)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {!!touched.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Account Password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              name="password"
              placeholder="Account Password"
              value={values.password}
              isInvalid={Boolean(touched.password && errors.password)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>User email: (used when signed up)</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              name="user_email"
              placeholder="User email"
              value={values.user_email}
              isInvalid={Boolean(touched.user_email && errors.user_email)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="text-center mt-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              Activate Account
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AccountActivationForm;
