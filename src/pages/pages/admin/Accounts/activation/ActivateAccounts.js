import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import AccountActivationForm from "./AccountActivationForm";

const ActivateAccounts = () => {
  return (
    <React.Fragment>
      <Helmet title="Activate Account" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Activate Account</h1>
        <Row className="text-center">
          <Card>
            <Card.Header tag="h5">
              Activate the Account here, after registering the Account<br></br>
              <span className="text-danger">Note</span>:Use the same credentials
              you used to create the Account
            </Card.Header>
            <Card.Body className="m-sm-4">
              <Row>
                <Col md={4}></Col>
                <Col md={4}>
                  <AccountActivationForm />
                </Col>
                <Col md={4}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ActivateAccounts;
