import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Card } from "react-bootstrap";
import CreateUserForm from "./forms/create_user_form";
const AddUser = () => (
  <React.Fragment>
    <Helmet title="Add User" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Create a New User</h1>
      <Card>
        <Card.Header>
          <Card.Title>
            <h1>Enter user details</h1>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <CreateUserForm />
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default AddUser;
