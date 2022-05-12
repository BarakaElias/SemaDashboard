import React from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import { Formik } from "formik";
import avatar1 from "../../../../assets/img/avatars/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../../hooks/useAuth";

const PublicInfo = () => {
  const { user } = useAuth();
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5" className="mb-0">
          Personal info
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={
            user
              ? {
                  username: user.username,
                  first_name: user.first_name,
                  last_name: user.last_name,
                  email: user.email,
                  phone_number: user.phone_number,
                }
              : {
                  username: "barelio",
                  first_name: "Baraka",
                  last_name: "Elias",
                  email: "baraka@aimfirms.com",
                  phone_number: "255624327900",
                }
          }
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
                      value={values.username}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputBio">First name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      name="first_name"
                      onChange={handleChange}
                      value={values.first_name}
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
                      value={values.last_name}
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
                      value={values.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputBio">Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone_number"
                      onChange={handleChange}
                      disabled
                      value={values.phone_number}
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
};

export default PublicInfo;
