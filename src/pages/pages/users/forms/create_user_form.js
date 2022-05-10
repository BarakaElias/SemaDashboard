import React from "react";
import { Form, Container, Card, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../../../../assets/img/avatars/avatar.jpg";

const CreateUserForm = () => {
  const CreateUserSchema = Yup.object().shape({
    first_name: Yup.string()

      .min(2, "Too Short!")

      .max(15, "Too Long!")

      .required("Required"),

    last_name: Yup.string()

      .min(2, "Too Short!")

      .max(15, "Too Long!")

      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min().required("Password is required"),
    role: Yup.string().required("Assign a user role"),
    profile: Yup.string(),
  });

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: "",
          email: "",
          first_name: "",
          last_name: "",
          phone_number: "",
          password: "",
          send_user_notification: true,
          role: "",
          profile: "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log(values);
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
            <h4>User Details</h4>
            <Row>
              <Col md="8">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Username</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    name="username"
                    id="inputUsername"
                    placeholder="Username"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Firstname</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    id="inputUsername"
                    name="first_name"
                    placeholder="Username"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Lastname</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    id="inputUsername"
                    placeholder="Username"
                  />
                </Form.Group>
              </Col>
              <Col md="4">
                <div className="text-center">
                  <img
                    alt="Chris Wood"
                    src={avatar1}
                    className="rounded-circle img-responsive mt-2"
                    width="128"
                    height="128"
                  />
                  <div className="mt-2">
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faUpload} /> Upload
                    </Button>
                  </div>
                  <small>
                    For best results, use an image at least 128px by 128px in
                    .jpg format
                  </small>
                </div>
              </Col>
            </Row>
            <br></br>

            <h4>Contact information</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={handleChange}
                    name="email"
                    id="inputUsername"
                    placeholder="johndoe@company.com"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone_number"
                    onChange={handleChange}
                    id="inputUsername"
                    placeholder="Should start with 255"
                  />
                </Form.Group>
              </Col>
            </Row>
            <br></br>

            <h4>Password</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <div className="m-2">
                  <h5 className="text-danger">Note</h5>
                  <ul>
                    <li>Password can be later changed by user</li>
                    <li>
                      An email will be sent to new user containing the password
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <h4>Role</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Select a role</Form.Label>
                  <Form.Select onChange={handleChange} name="role">
                    <option>Administrator</option>
                    <option>Helper</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <div className="m-2">
                  <h5 className="text-danger">Note</h5>
                  <ul>
                    <li>
                      <strong>Administrator:</strong> has full control
                    </li>
                    <li>
                      <strong>Helper</strong> cant create users
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Button
              type="submit"
              className="btn-success btn-lg"
              // onClick={formDataToParams}
            >
              Create User
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default CreateUserForm;
