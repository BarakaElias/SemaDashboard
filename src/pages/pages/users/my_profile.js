import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";

const Navigation = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Profile Settings
      </Card.Title>
    </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item tag="a" href="#" action active>
        Account
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Password
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Privacy and safety
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Email notifications
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Web notifications
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Widgets
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Your data
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Delete account{" "}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

const PublicInfo = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Personal info
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Formik
        initialValues={{
          username: "barelio",
          first_name: "Baraka",
          last_name: "Elias",
          email: "baraka@aimfirms.com",
          phone_number: "255624327900",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log("Edit Personal Info", values);
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
          <Form>
            <Row>
              <Col md="8">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputUsername">Username</Form.Label>
                  <Form.Control
                    type="text"
                    id="inputUsername"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputBio">First name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    name="first_name"
                    onChange={handleChange}
                    value="Baraka"
                    placeholder="Tell something about yourself"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputBio">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    disabled
                    value="Elias"
                    placeholder="Tell something about yourself"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputBio">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    disabled
                    value="barakaurio@yahoo.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputBio">Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone_number"
                    onChange={handleChange}
                    disabled
                    value="Elias"
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

            <Button type="submit" variant="primary">
              Save changes
            </Button>
          </Form>
        )}
      </Formik>
    </Card.Body>
  </Card>
);

const PrivateInfo = () => (
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
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Old password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    id="email"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="lastName">New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm_password"
                    id="lastName"
                    onChange={handleChange}
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm_new_password"
                    onChange={handleChange}
                    id="email"
                    placeholder="Email"
                  />
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

const MyProfile = () => (
  <React.Fragment>
    <Helmet title="My Profile" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Settings</h1>

      <Row>
        <Col md="3" xl="2">
          {/* <Navigation /> */}
        </Col>
        <Col md="9" xl="10">
          <PublicInfo />
          <PrivateInfo />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default MyProfile;
