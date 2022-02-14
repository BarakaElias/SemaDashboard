import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Timezones from "../../../utils/timezones";
import { useSelector, RootStateOrAny } from "react-redux";

const UploadFileSMS = () => {
  const user = useSelector((state: RootStateOrAny) => state.user.value);

  const sender_ids = useSelector(
    (state: RootStateOrAny) => state.sender_ids.values
  );
  const [formState, setFormState] = useState({
    uploadFileForm: {
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
      file: {
        required: true,
        value: "",
        hasError: false,
      },
      textmessage: {
        required: true,
        value: "",
        hasError: false,
      },
      csv_columns: {
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
    const updatedQuickSMSForm = { ...formState.uploadFileForm };
    const updatedFormElement = { ...updatedQuickSMSForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.hasError = checkValidity(
      updatedFormElement.value,
      updatedFormElement.required
    );
    updatedQuickSMSForm[inputIdentifier] = updatedFormElement;
    setFormState({ uploadFileForm: updatedQuickSMSForm });
    console.log(formState.uploadFileForm);
  };

  // const onFileUpload = () => { };
  let scheduleForm =
    formState.uploadFileForm["sms_schedule"].value === "yes" ? (
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
        <h1 className="h3 mb-3">File Upload</h1>

        <Card>
          <Card.Header>
            <Card.Title tag="h5">Upload File</Card.Title>
            <h6 className="card-subtitle text-muted">
              Upload phone numbers stored in a file
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
                    <Form.Select name="senderId">
                      <option />
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
                    <Form.Label>
                      Enter Phone number prefix (optional)
                    </Form.Label>
                    <Form.Control
                      onChange={(event) =>
                        inputChangedHandler(event, "phone_number_prefix")
                      }
                      type="text"
                      name="smsPhoneNumberPrefix"
                      placeholder="Eg: 255"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Excel/ CSV File</Form.Label>
                    <Form.Control
                      onChange={(event) => inputChangedHandler(event, "file")}
                      type="file"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
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
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Insert Excel/ CSV columns</Form.Label>
                    <Form.Select
                      onChange={(event) =>
                        inputChangedHandler(event, "csv_columns")
                      }
                      name="smsExcelCsvColumns"
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
                      type="checkbox"
                      id="smsRTL"
                      label="Enable RTL Format"
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-2">
                      <Form.Select
                        onChange={(event) =>
                          inputChangedHandler(event, "csv_columns")
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
                    inputChangedHandler(event, "text_message")
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

export default UploadFileSMS;
