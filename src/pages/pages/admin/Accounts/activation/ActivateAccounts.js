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
        <Row>
          <Card>
            <Card.Header className="text-center" tag="h5">
              Activate the Account here, after registering the Account<br></br>
              <span className="text-danger">Note</span>:Use the same credentials
              you used to create the Account
            </Card.Header>
            <Card.Body className="m-sm-4">
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <AccountActivationForm />
                </Col>
                <Col md={2}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ActivateAccounts;
