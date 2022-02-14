import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
// import InputMask from "react-input-mask";

import { Card, Container, Row, Button, Form, Col } from "react-bootstrap";
import JobsTable from "./jobsTable";

const SmsJobs = () => {
  const [formState, setFormState] = useState({
    contactListForm: {
      start_date: {
        required: false,
        value: "",
        hasError: false,
      },
      end_date: {
        required: false,
        value: "",
        hasError: false,
      },
      sender_id: {
        required: false,
        value: "",
        hasError: false,
      },
      job_status: {
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
  return (
    <React.Fragment>
      <Helmet title="SMS JOBS" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Job Manager</h1>
        <Card>
          <Card.Header>
            <Card.Title tag="h5">SMS JOBS</Card.Title>
            <h6 className="card-subtitle mb-3 text-muted">All sms Jobs</h6>
            {/* <Button variant="success">CREATE A NEW JOB</Button> */}
          </Card.Header>
          <Card.Body>
            <Row>
              <Form>
                <h1 className="h3 mb-3">Filter</h1>
                <Row>
                  <Col md={2}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        onChange={(event) =>
                          inputChangedHandler(event, "start_date")
                        }
                        type="date"
                      />
                      <span className="text-muted">e.g "MM/DD/YYYY"</span>
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group className="mb-3">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        onChange={(event) =>
                          inputChangedHandler(event, "end_date")
                        }
                        type="date"
                      />
                      <span className="text-muted">e.g "MM/DD/YYYY"</span>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Sender ID (optional)</Form.Label>
                      <Form.Control
                        onChange={(event) =>
                          inputChangedHandler(event, "sender_id")
                        }
                        type="text"
                        name="smsJobSenderID"
                        placeholder="Enter a sender ID"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Job Status</Form.Label>
                      <Form.Select
                        onChange={(event) =>
                          inputChangedHandler(event, "job_status")
                        }
                        name="smsJobStatus"
                      >
                        <option>View All</option>
                        <option>Preparing</option>
                        <option>Completed</option>
                        <option>In progress</option>
                        <option>Partially finished</option>
                        <option>In queue</option>
                        <option>Scheduled</option>
                        <option>Waiting for execution</option>
                        <option>Insufficient credit</option>
                        <option>Stopped</option>
                        <option>Deleted</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="d-flex">
                    <Button type="submit" variant="info" size="lg">
                      Search Job
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
            <hr />
            <Row>
              <JobsTable />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default SmsJobs;
