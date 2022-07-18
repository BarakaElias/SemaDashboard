import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const CreateInvoice = () => {
  return (
    <React.Fragment>
      <Helmet title="Create Invoice" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Create Invoice</h1>
        <Row>
          <Card>
            <Card.Header className="text-center" tag="h5"></Card.Header>
            <Card.Body className="m-sm-4">form</Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CreateInvoice;
