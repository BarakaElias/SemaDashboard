import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

import { Card, Container, Row, Form, Col, Button } from "react-bootstrap";
import ContactListTable from "./contactListTable";
import DashboardLayout from "../../../../layouts/Dashboard";

const ContactList = (props) => {
  const [formState, setFormState] = useState({
    addContactForm: {
      contact_name: {
        required: true,
        value: "",
        hasError: false,
      },
      contact_number: {
        required: true,
        value: "",
        hasError: false,
      },
    },
    contact_list_id: "374",
  });
  const checkValidity = (value, isRequired) => {
    let isValid = true;
    if (isRequired) {
      isValid = value.trim() === "";
      return isValid;
    }
    return !isValid;
  };

  const addContactToList = () => {
    const parameters = { ...formState.addContactForm };
    const params = {
      api_id: "API3462965997",
      api_password: "Licks@2021!",
      contact_list_id: formState.contact_list_id,
      contact_name: parameters.contact_name.value,
      contact_number: parameters.contact_number.value,
    };
    axios
      .get("https://api.sema.co.tz/api/AddContact", { params: params })
      .then((response) => {
        console.log(response);
      })
      .catch();
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedQuickSMSForm = { ...formState.addContactForm };
    const updatedFormElement = { ...updatedQuickSMSForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.hasError = checkValidity(
      updatedFormElement.value,
      updatedFormElement.required
    );
    updatedQuickSMSForm[inputIdentifier] = updatedFormElement;
    setFormState({
      addContactForm: updatedQuickSMSForm,
      contact_list_id: "374",
    });
    console.log(formState.contact_list_id);
  };

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
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Enter Phone number prefix (optional)
                      </Form.Label>
                      <Form.Control
                        onChange={(event) =>
                          inputChangedHandler(event, "contact_name")
                        }
                        type="text"
                        name="smsPhoneNumberPrefix"
                        placeholder="Enter name of contact"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter Phone number</Form.Label>
                      <Form.Control
                        onChange={(event) =>
                          inputChangedHandler(event, "contact_number")
                        }
                        type="text"
                        name="smsPhoneNumberPrefix"
                        placeholder="Enter contact number"
                      />
                    </Form.Group>
                  </Col>
                  <Col className="d-flex justify-content-start">
                    <Button
                      onClick={addContactToList}
                      size="lg"
                      variant="primary"
                    >
                      Add New Contact
                    </Button>
                  </Col>
                </Row>
              </Form>
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
