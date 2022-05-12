import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import NewAccountsTable from "./NewAccountsTable";

const NewAccounts = () => {
  return (
    <React.Fragment>
      <Helmet title="New Accounts" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Newly Registered Accounts</h1>
        <Row>
          <Card>
            <Card.Header tag="h5">
              A list of all users who just newly registered<br></br>
            </Card.Header>
            <Card.Body className="m-sm-4">
              <NewAccountsTable />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NewAccounts;
