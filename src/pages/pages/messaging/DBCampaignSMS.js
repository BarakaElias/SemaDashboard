import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, RootStateOrAny } from "react-redux";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Timezones from "../../../utils/timezones";

const DbCampaignSMS = () => {
  const user = useSelector((state: RootStateOrAny) => state.user.value);

  const sender_ids = useSelector(
    (state: RootStateOrAny) => state.sender_ids.values
  );
  const [formState, setFormState] = useState({
    dbCampaignForm: {
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
      phone_number_prefix: {
        required: true,
        value: "",
        hasError: false,
      },
      country: {
        required: true,
        value: "",
        hasError: false,
      },
      db_campaign: {
        required: true,
        value: "",
        hasError: false,
      },
      textmessage: {
        required: true,
        value: "",
        hasError: false,
      },
      shortlink: {
        required: false,
        value: "",
        hasError: false,
      },
      start_count: {
        required: true,
        value: "",
        hasError: false,
      },
      end_count: {
        required: false,
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
    const updatedQuickSMSForm = { ...formState.dbCampaignForm };
    const updatedFormElement = { ...updatedQuickSMSForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.hasError = checkValidity(
      updatedFormElement.value,
      updatedFormElement.required
    );
    updatedQuickSMSForm[inputIdentifier] = updatedFormElement;
    setFormState({ dbCampaignForm: updatedQuickSMSForm });
    console.log(formState.dbCampaignForm);
  };
  let scheduleForm =
    formState.dbCampaignForm["sms_schedule"].value === "yes" ? (
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
        <h1 className="h3 mb-3">DB Campaign</h1>

        <Card>
          <Card.Header>
            <Card.Title tag="h5">Send a DB Campaign</Card.Title>
            <h6 className="card-subtitle text-muted">
              Send SMS from Database Data
            </h6>
          </Card.Header>
          <Card.Body>
            <Form>
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
                      <option value="T">Transactional</option>
                      <option value="P">Promotional</option>
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
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "country")
                      }
                      name="smsCountry"
                    >
                      <option />
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Select DB Campaign</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "db_campaign")
                      }
                      name="smsDBCampaign"
                    >
                      <option />
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Start Campaign count</Form.Label>
                    <Form.Control
                      onChange={(event) =>
                        inputChangedHandler(event, "start_count")
                      }
                      type="text"
                      name="smsStartCampaignCount"
                      placeholder="Enter Campaign start count Eg: 1"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Label>End Campaign count</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      inputChangedHandler(event, "end_count")
                    }
                    type="text"
                    name="smsEndCampaignCount"
                    placeholder="ENter Campaign end count Eg: 15"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
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
                <Row>
                  <Col md={3}>
                    <Form.Check
                      onChange={(event) => inputChangedHandler(event, "smsRTL")}
                      type="checkbox"
                      id="smsRTL"
                      label="Enable RTL Format"
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-2">
                      <Form.Select
                        onChange={(event) =>
                          inputChangedHandler(event, "shortlink")
                        }
                        name="smsExcelCsvColumns"
                      >
                        <option>Select Campaign/ Shortlink</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Control
                  onChange={(event) =>
                    inputChangedHandler(event, "textmessage")
                  }
                  as="textarea"
                  name="smsMessage"
                  placeholder="Enter Message Text"
                />

                <ul className="mb-3">
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
              <Button variant="primary">Send SMS</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default DbCampaignSMS;
