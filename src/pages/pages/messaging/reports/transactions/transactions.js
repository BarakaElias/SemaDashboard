import React from "react";
import { Helmet } from "react-helmet-async";
// import InputMask from "react-input-mask";

import { Card, Container, Row, Button } from "react-bootstrap";
import TransactionsTable from "./transactionsTable";

const smsTransactions = () => (
  <React.Fragment>
    <Helmet title="SMS TRANSACTIONS" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">SMS TRANSACTIONS</h1>
      <Card>
        <Card.Header>
          <Card.Title tag="h5">SMS TRANSACTIONS</Card.Title>
          <h6 className="card-subtitle mb-3 text-muted">
            All SMS Transactions
          </h6>
          <Button variant="success">EXPORT TO EXCEL</Button>
        </Card.Header>
        <Card.Body>
          <Row>
            <TransactionsTable />
          </Row>
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default smsTransactions;
