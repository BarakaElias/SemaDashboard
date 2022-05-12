import React, { useContext } from "react";
import { Card, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import NotyfContext from "../../../../contexts/NotyfContext";

const PrivateInfo = () => {
  const { resetPassword, user, accessToken } = useAuth();
  const notyf = useContext(NotyfContext);
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5" className="mb-0">
          Password Change
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={{
            old_password: "",
            new_password: "",
            confirm_new_password: "",
          }}
          enableReinitialize={true}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            console.log("Change password", values);

            try {
              const response = await axios.post(
                "http://localhost/semaapi/public/api/reset_password",
                {
                  user_id: user.id.toString(),
                  password: values.old_password,
                  new_password: values.new_password,
                }
                // { headers: { Authorization: `Bearer ${accessToken}` } }
                // { Authorization: `Bearer ${accessToken}` }
              );
              console.log("reset: ", response);
              if (response.status === 200) {
                notyf.success("Password changed");
              } else {
                notyf.error("Unable to change password");
              }
            } catch (e) {
              console.log("reset error: ", e);
              notyf.error("Critical error occured");
            }

            // try {
            //   resetPassword(values.old_password, values.new_password, user.id);
            //   //   navigate("/auth/sign-in");
            // } catch (error) {
            //   const message = error.message || "Something went wrong";

            //   setStatus({ success: false });
            //   setErrors({ submit: message });
            //   setSubmitting(false);
            // }
          }}
          validationSchema={Yup.object().shape({
            old_password: Yup.string()
              .min(8, "Must be at least 8 characters")
              .max(255)
              .required("Required"),
            new_password: Yup.string()
              .min(8, "Must be at least 8 characters")
              .max(255)
              .required("Required"),
            confirm_new_password: Yup.string()
              .min(8, "Must be at least 8 characters")
              .max(255)
              .oneOf(
                [Yup.ref("new_password"), null],
                "Must match with new password"
              )
              .required("Required"),
          })}
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
                  {errors.submit}
                </Alert>
              )}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Old password</Form.Label>
                    <Form.Control
                      type="password"
                      name="old_password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                      isInvalid={Boolean(
                        touched.old_password && errors.old_password
                      )}
                      placeholder="Your old password"
                    />
                    {!!touched.password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="lastName">New Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="new_password"
                      id="lastName"
                      onChange={handleChange}
                      isInvalid={Boolean(
                        touched.new_password && errors.new_password
                      )}
                      onBlur={handleBlur}
                    />
                    {!!touched.new_password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.new_password}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">
                      Confirm New Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="confirm_new_password"
                      onChange={handleChange}
                      isInvalid={Boolean(
                        touched.confirm_new_password &&
                          errors.confirm_new_password
                      )}
                    />
                    {!!touched.confirm_new_password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.confirm_new_password}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}></Col>
              </Row>

              <Button type="submmit" variant="primary">
                Save changes
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default PrivateInfo;
