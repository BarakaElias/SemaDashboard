import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import NotyfContext from "../../../contexts/NotyfContext";
import { useSelector, RootStateOrAny } from "react-redux";
// import { retrieveSenderIDs } from "../../../redux/slices/senderids";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
// import DatePicker from "react-datetime";
import AlertDialog from "../../../pages/ui/AlertDialog/AlertDialog";
import Timezones from "../../../utils/timezones";
import sendSMS from "../../../utils/sendSMS";
// import { GetDeliveryReport } from "./deliveryStatus";

const QuickSMS = () => {
  // const notyf = useContext(NotyfContext);
  const user = useSelector((state: RootStateOrAny) => state.user.value);
  const sender_ids = useSelector(
    (state: RootStateOrAny) => state.sender_ids.values
  );
  // const formRef = useRef();

  const [quickState, setQuickState] = useState({
    alertOpen: false,
    formVals: null,
    scheduled_sms: false,
    timezone: "",
    dateAndTime: "",
  });

  const charLength =
    quickState.formVals === null || quickState.formVals === undefined
      ? ""
      : quickState.formVals.textmessage.length;

  const alertDialogContent = {
    type: "certainty",
    title: "Are you sure?",
    message:
      "Your message will be sent in 1 Part & contains " +
      charLength +
      " characters. Do you want to send sms?",
  };

  const closeAlertModal = () => {
    setQuickState({ alertOpen: false, quickSMSForm: quickState.quickSMSForm });
  };

  const openAlertModal = (params) => {
    // console.log("modal ", params);
    // console.log("Reference: ", formRef);
    setQuickState({ alertOpen: true, formVals: { ...params } });
  };

  const sendSMSHandler = () => {
    sendSMS(quickState.formVals);

    setQuickState({
      alertOpen: false,
    });
  };

  let dialog = quickState.alertOpen ? (
    <AlertDialog
      content={alertDialogContent}
      closeAlertFunc={closeAlertModal}
      sendSMSFunc={() => sendSMSHandler(quickState.formVals)}
    />
  ) : null;

  const handleScheduleChange = (event, ident) => {
    if (ident === "timezone") {
      setQuickState({ timezone: event.target.value });
    } else if (ident === "dateAndTime") {
      setQuickState({ dateAndTime: event.target.value });
    } else {
      if (event.target.value === "yes") {
        setQuickState({ scheduled_sms: true });
      } else if (event.target.value === "no") {
        setQuickState({ scheduled_sms: false, dateAndTime: "", timezone: "" });
      }
    }
  };

  const scheduleForm = quickState.scheduled_sms ? (
    <Row>
      <Col>
        <Form.Group className="mb-3">
          <Form.Label>Select Timezone</Form.Label>
          <Form.Select
            onChange={(event) => handleScheduleChange(event, "timeZone")}
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
            onChange={(event) => handleScheduleChange(event, "dateAndTime")}
            type="datetime-local"
            min="11/07/2021 19:30 21"
          />
        </Form.Group>
      </Col>
    </Row>
  ) : null;

  return (
    <React.Fragment>
      {dialog}
      <Helmet title="Quick SMS" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Quick SMS</h1>
        <Card>
          <Card.Header>
            <Card.Title tag="h5">Send a quick SMS</Card.Title>
            <h6 className="card-subtitle text-muted">
              Some subtitle goes here
            </h6>
          </Card.Header>
          <Card.Body>
            <Formik
              initialValues={{
                api_id: user.api_id,
                api_password: user.api_password,
                sms_type: "T",
                sender_id: "INFO",
                encoding: "T",
                phonenumber: "",
                template_id: "",
                textmessage: "",
                schedule_sms: "no",
              }}
              validationSchema={Yup.object().shape({
                sms_type: Yup.string().required("SMS type is required").max(1),
                sender_id: Yup.string().required("Sender Id is required"),
                encoding: Yup.string().required("Encoding is required!"),
                phonenumber: Yup.string()
                  .required("Enter atleast one phone number!")
                  .min(12),
                template_id: Yup.string(),
                textmessage: Yup.string().required("Please Enter a message"),
              })}
              onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting }
              ) => {
                openAlertModal(values);
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
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>SMS Type</Form.Label>
                        <Form.Select
                          onChange={handleChange}
                          type="text"
                          name="sms_type"
                        >
                          <option value="T">Transactional</option>
                          <option value="P">Promotional</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Select Sender Id</Form.Label>

                        <Form.Select onChange={handleChange} name="sender_id">
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

                        <Form.Select onChange={handleChange} name="encoding">
                          <option value="T">
                            Text (Used for only English)
                          </option>
                          <option value="U">
                            Unicode (Used for all languages
                          </option>
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
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Enter Phone Numbers (Enter One Number Per Line. Max 100
                      Numbers)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      required
                      value={values.phonenumber}
                      name="phonenumber"
                      isInvalid={Boolean(
                        touched.phonenumber && errors.phonenumber
                      )}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter phone number one below the other with country code Eg: 255624323232"
                    />
                    {!!touched.phonenumber && (
                      <Form.Control.Feedback type="invalid">
                        {errors.phonenumber}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Select Template</Form.Label>

                    <Form.Select onChange={handleChange} name="template_id">
                      <option />
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Message Text</Form.Label>
                    <Form.Check
                      //  onChange={(event) => inputChangedHandler(event, "smsRTL")}
                      type="checkbox"
                      name="smsRTL"
                      id="smsRTL"
                      label="Enable RTL Format"
                    />
                    <p>
                      Contains <strong>10</strong> characters
                    </p>

                    <Form.Control
                      as="textarea"
                      rows={8}
                      name="textmessage"
                      required
                      value={values.textmessage}
                      onBlur={handleBlur}
                      isInvalid={Boolean(
                        touched.textmessage && errors.textmessage
                      )}
                      placeholder="Enter Message Text"
                      onChange={handleChange}
                    />
                    {!!touched.textmessage && (
                      <Form.Control.Feedback type="invalid">
                        {errors.textmessage}
                      </Form.Control.Feedback>
                    )}
                    <ul>
                      <li>Encoding: GSM_7BIT</li>
                      <li>Characters: {values.textmessage.length}</li>
                      <li>Messages: 0</li>
                      <li>Per Message: 160</li>
                      <li>Remainig: {160 - values.textmessage.length}</li>
                    </ul>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Job Name (optional)</Form.Label>
                        <Form.Control
                          type="text"
                          // name="smsJobname"
                          // onChange={(event) =>
                          // }
                          placeholder="Please enter a job name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Schedule Message</Form.Label>

                        <Form.Select
                          onChange={(event) => handleScheduleChange(event)}
                          // name="sms_schedule"
                          onBlur={handleBlur}
                        >
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>{" "}
                  {scheduleForm}
                  <Button size="lg" type="submit" variant="primary">
                    Send SMS
                  </Button>
                </Form>
              )}
              {/* innerRef={formRef} */}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default QuickSMS;
