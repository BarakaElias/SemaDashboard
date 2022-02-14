import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
// import InputMask from "react-input-mask";

import { Card, Container, Row, Button, Form, Col } from "react-bootstrap";
import DlrReportTable from "./dlrReportTable";

const SmsDlrReport = () => {
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
      <Helmet title="SMS DLR Report" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">DLR REPORT</h1>
        <Card>
          <Card.Header>
            <Card.Title tag="h5">DLR REPORT</Card.Title>
            <h6 className="card-subtitle mb-3 text-muted">
              All SMS DLR Reports
            </h6>
            <Button variant="success">EXPORT TO EXCEL</Button>
          </Card.Header>
          <Card.Body>
            <Row>
              <Form>
                <Row>
                  <Col>
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
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        onChange={(event) =>
                          inputChangedHandler(event, "end_date")
                        }
                        type="date"
                      />
                      <span className="text-muted">e.g "MM/DD/YYYY"</span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Sender ID (optional)</Form.Label>
                      <Form.Control
                        type="text"
                        name="smsJobSenderID"
                        placeholder="Enter a sender ID"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>DLR Status</Form.Label>
                      <Form.Select name="smsJobStatus">
                        <option>View All</option>
                        <option>Pending</option>
                        <option>Delivered</option>
                        <option>Undeliverable</option>
                        <option>Acknowledged</option>
                        <option>Expired</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                        <option>Failed</option>
                        <option>DND</option>
                        <option>None</option>
                        <option>Enrote</option>
                        <option>Deleted</option>
                        <option>Unknown</option>
                        <option>Submitted</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Row>
            <hr />
            <div className="d-flex flex-row justify-content-end">
              <div className="p-3">
                <Button variant="primary">View DLR Report</Button>
              </div>
              <div className="p-3">
                <Button variant="success">Download Excel</Button>
              </div>
              <div className="p-3">
                <Button variant="info">Generate CSV</Button>
              </div>
            </div>
            <Row>
              <DlrReportTable />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};
export default SmsDlrReport;
