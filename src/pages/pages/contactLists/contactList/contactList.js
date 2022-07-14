import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { Formik } from "formik";
import NotyfContext from "../../../../contexts/NotyfContext";
import { Card, Container, Row, Form, Col, Button } from "react-bootstrap";
import ContactListTable from "./contactListTable";
import DashboardLayout from "../../../../layouts/Dashboard";

const ContactList = (props) => {
  const notyf = useContext(NotyfContext);

  return (
    <DashboardLayout>
      <React.Fragment>
        <Helmet title="SMS CONTACT LISTS" />
        <Container fluid className="p-0">
          <h1 className="h3 mb-3">Edit Contact List</h1>
          <Card>
            <Card.Header>
              <Card.Title tag="h5">
                <h3>AimFirm's Subscribers</h3>
              </Card.Title>
              <h6 className="card-subtitle mb-3 text-muted">
                Add a new Contact
              </h6>
              {/* <Button onClick={onRequestButtonClicked}>
              ADD A NEW CONTACT LIST
            </Button> */}
              <Formik
                initialValues={{
                  api_id: "API213160153",
                  api_password: "ForDemoClient123",
                  contact_id: "373",
                  contact_name: "",
                  contact_number: "",
                }}
                enableReinitialize={true}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting }
                ) => {
                  console.log("Add contact in Contact list", values);
                  try {
                    const response = await axios.post(
                      "https://api.sema.co.tz/api/AddContact",
                      {
                        contact_id: values.contact_id,
                        contact_name: values.contact_name,
                        contact_number: values.contact_number,
                      }
                    );
                    if (response.status === 200) {
                      if (response.data.status === "S") {
                        notyf.success(response.data.remarks);
                      } else if (response.data.status === "F") {
                        notyf.error(response.data.remarks);
                      }
                    }
                  } catch (e) {
                    console.log("Add Contact error", e);
                    notyf.error("Failed to reach Server");
                    setStatus({ success: false });
                    setErrors({ submit: e.message });
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
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Contact name</Form.Label>
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            onBlur={handleBlur}
                            isInvalid={Boolean(
                              touched.contact_name && errors.contact_name
                            )}
                            name="contact_name"
                            placeholder=""
                          />
                          {!!touched.contact_name && (
                            <Form.Control.Feedback type="invalid">
                              {errors.contact_name}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone number</Form.Label>
                          <Form.Control
                            onChange={handleChange}
                            type="text"
                            onBlur={handleBlur}
                            isInvalid={Boolean(
                              touched.contact_number && errors.contact_number
                            )}
                            name="contact_number"
                            placeholder="Eg: 255624123123"
                          />
                          {!!touched.contact_number && (
                            <Form.Control.Feedback type="invalid">
                              {errors.contact_number}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>
                      <Col className="d-flex justify-content-start">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          variant="primary"
                        >
                          Add New Contact
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Card.Header>
            <Card.Body>
              <Row>
                <ContactListTable />
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    </DashboardLayout>
  );
};

export default ContactList;
