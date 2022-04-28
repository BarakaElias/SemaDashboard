import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Timezones from "../../../utils/timezones";
import { useSelector, RootStateOrAny } from "react-redux";

// const FormRow = () => (

// );

const ContactListSMS = (props) => {
  // const user = useSelector((state: RootStateOrAny) => state.user.value);
  const sender_ids = useSelector(
    (state: RootStateOrAny) => state.sender_ids.values
  );
  const [formState, setFormState] = useState({
    contactListForm: {
      sms_type: {
        required: true,
        value: "",
        hasError: false,
      },
      encoding: {
        required: true,
        value: "",
        hasError: false,
      },
      sender_id: {
        required: true,
        value: "",
        hasError: false,
      },
      contact_list: {
        required: true,
        value: "",
        hasError: false,
      },
      textmessage: {
        required: true,
        value: "",
        hasError: false,
      },
      sms_template: {
        required: false,
        value: "",
        hasError: false,
      },
      smsRTL: {
        required: true,
        value: "",
        hasError: false,
      },
      smsJobName: {
        required: false,
        value: "",
        hasError: false,
      },
      sms_schedule: {
        required: false,
        value: "",
        hasError: false,
      },
      dateAndTime: {
        required: false,
        value: "",
        hasError: false,
      },
      timeZone: {
        required: false,
        value: "",
        hasError: false,
      },
    },
    alertOpen: false,
  });

  const checkValidity = (value, isRequired) => {
    let isValid = true;
    if (isRequired) {
      isValid = value.trim() === "";
      return isValid;
    }
    return !isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    // console.log(event.target.value);
    const updatedQuickSMSForm = { ...formState.contactListForm };
    const updatedFormElement = { ...updatedQuickSMSForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.hasError = checkValidity(
      updatedFormElement.value,
      updatedFormElement.required
    );
    updatedQuickSMSForm[inputIdentifier] = updatedFormElement;
    setFormState({ contactListForm: updatedQuickSMSForm });
    console.log(updatedQuickSMSForm);
  };

  const sendSMSHandler = (event) => {
    event.preventDefault();
  };
  // const alertDialogContent = {
  //   type: "certainty",
  //   title: "Are you sure?",
  //   message:
  //     "Your message will be sent in 1 Part & contains 2 characters. Do you want to send sms?",
  //   feedback: "Fucntiosn",
  // };
  // const openAlertModal = () => {
  //   this.setState({ alertOpen: true });
  // };
  // const closeAlertModal = () => {
  //   this.setState({ alertOpen: false });
  // };
  let scheduleForm =
    formState.contactListForm["sms_schedule"].value === "yes" ? (
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Select Timezone</Form.Label>
            <Form.Select
              onChange={(event) => inputChangedHandler(event, "timeZone")}
              type="text"
              name="smsType"
            >
              {Timezones.map((timezone) => (
                <option>{timezone.offset + " " + timezone.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Select Date & Time</Form.Label>
            <Form.Control
              onChange={(event) => inputChangedHandler(event, "dateAndTime")}
              type="datetime-local"
              min="11/07/2021 19:30 21"
            />
          </Form.Group>
        </Col>
      </Row>
    ) : null;

  return (
    <React.Fragment>
      <Helmet title="Contact List SMS" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Contact List</h1>

        <Card>
          <Card.Header>
            <Card.Title tag="h5">Send SMS to a List of Contacts</Card.Title>
            <h6 className="card-subtitle text-muted">
              <Link to="/contact-lists">Create a Contact List</Link>
            </h6>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={sendSMSHandler}>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>SMS Type</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "sms_type")
                      }
                      type="text"
                      name="smsType"
                    >
                      <option value="P">Promotional</option>
                      <option value="T">Transactional</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Select Sender Id</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "sender_id")
                      }
                      name="senderId"
                    >
                      {sender_ids.map((sender_id) => (
                        <option
                          key={sender_id.sender_id}
                          value={sender_id.sender_id}
                        >
                          {sender_id.sender_id}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Open Sender ID"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Select SMS Encoding</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "encoding")
                      }
                      name="smsEncoding"
                    >
                      <option value="T">Text (Used for only English)</option>
                      <option value="U">Unicode (Used for all languages</option>
                      <option value="FS">
                        Flash SMS (Used only with English
                      </option>
                      <option value="UFS">
                        Unicode Flash SMS (Use for all languages)
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Select Contact List</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "contact_list")
                      }
                      name="smsContactList"
                    >
                      <option />
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Select Template</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "sms_template")
                      }
                      name="smsTemplate"
                    >
                      <option />
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Enter Message Text</Form.Label>
                <Form.Check
                  onChange={(event) => inputChangedHandler(event, "smsRTL")}
                  type="checkbox"
                  id="smsRTL"
                  label="Enable RTL Format"
                />
                <Form.Control
                  onChange={(event) =>
                    inputChangedHandler(event, "textmessage")
                  }
                  as="textarea"
                  name="smsMessage"
                  placeholder="Enter Message Text"
                />

                <ul>
                  <li>Encoding: GSM_7BIT</li>
                  <li>Length: 0</li>
                  <li>Messages: 0</li>
                  <li>Per Message: 160</li>
                  <li>Remainig: 160</li>
                </ul>
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Schedule Message</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "sms_schedule")
                      }
                      name="smsSchedule"
                    >
                      <option>No</option>
                      <option value="yes">Yes</option>
                    </Form.Select>
                  </Form.Group>
                  {scheduleForm}
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Job Name (optional)</Form.Label>
                    <Form.Control
                      onChange={(event) =>
                        inputChangedHandler(event, "smsJobName")
                      }
                      type="text"
                      name="smsJobname"
                      placeholder="Please enter a job name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" variant="primary">
                Send SMS
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ContactListSMS;
