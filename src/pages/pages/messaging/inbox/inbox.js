import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import InputMask from "react-input-mask";

import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import InboxTable from "./inboxTable";

const Inbox = () => {
  const [formState, setFormState] = useState({
    dateFilter: {
      startDate: "",
      endDate: "",
    },
  });
  const inputChangedHandler = (event, inputIdentifier) => {
    const stateData = { ...formState.dateFilter };
    switch (inputIdentifier) {
      case "startDate":
        stateData.startDate = event.target.value;
        setFormState({ dateFilter: stateData });
        break;
      case "endDate":
        stateData.endDate = event.target.value;
        setFormState({ dateFilter: stateData });
        break;
      default:
        break;
    }
    console.log(formState.dateFilter);
  };
  return (
    <React.Fragment>
      <Helmet title="SMS Inbox" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Sms Inbox</h1>

        <Card>
          <Card.Header>
            <Card.Title tag="h5">Your Inbox</Card.Title>
            <h6 className="card-subtitle text-muted">All inbound sms</h6>
          </Card.Header>
          <Card.Body>
            <Row>
              <Form>
                <Row>
                  <Col md={5}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        onChange={(event) =>
                          inputChangedHandler(event, "startDate")
                        }
                        type="date"
                      />
                      <span className="text-muted">e.g "MM/DD/YYYY"</span>
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <InputMask mask="99/99/9999">
                        {(inputProps) => (
                          <Form.Control {...inputProps} type="text" />
                        )}
                      </InputMask>
                      <span className="text-muted">e.g "DD/MM/YYYY"</span>
                    </Form.Group>
                  </Col>
                  <Col className="d-flex">
                    <Button size="lg" variant={"info"} className="me-1 mb-1">
                      Filter
                    </Button>
                  </Col>
                  <Col className="d-flex">
                    <Button size="lg" variant={"success"} className="me-1 mb-1">
                      Download Excel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
            <Row>
              <InboxTable />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Inbox;
