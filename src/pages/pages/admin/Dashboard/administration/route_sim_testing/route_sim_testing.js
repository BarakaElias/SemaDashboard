import React from "react";
import { Card, Row, Container, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const RouteSimTesting = () => {
  return (
    <React.Fragment>
      <Helmet title="Route/SIM Testing" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Route/SIM Testing</h1>
        <Row>
          <Card>
            <Card.Header className="text-center" tag="h5">
              Activate the Account here, after registering the Account<br></br>
              <span className="text-danger">Note</span>:Use the same credentials
              you used to create the Account
            </Card.Header>
            <Card.Body className="m-sm-4">
              <Row>route test & test sms</Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card>
            <Card.Header>
              <Row>
                <Col md={9}>ROUTE/SIM TEST HISTORY</Col>
                <Col md={3}>
                  <div className="d-flex flex-row justify-content-between">
                    <Button variant="danger">Delete Selected</Button>
                    <Button variant="primary">Refresh</Button>
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="m-sm-4">
              <h1>the route/sim test table</h1>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default RouteSimTesting;
