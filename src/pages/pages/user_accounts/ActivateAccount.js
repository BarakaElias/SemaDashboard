import axios from "axios";
import React, { useContext } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import NotyfContext from "../../../contexts/NotyfContext";
import AccountActivation from "./components/AccountActivation/AccountActivation";
import AccountInfoForm from "./components/AccountInfo/AccountInfoForm";

const ActivateAccount = () => {
  const { user } = useAuth();

  const notyf = useContext(NotyfContext);

  return (
    <React.Fragment>
      <Helmet title="Activate Account" />
      <Container fluid className="p-0">
        <Row>
          <Col md={10}>
            <h1 className="h3 mb-3">Account Activation</h1>
          </Col>
        </Row>
        <Row>
          {/* <AccountActivation /> */}
          <AccountInfoForm />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ActivateAccount;
