import axios from "axios";
import React, { useContext } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import NotyfContext from "../../../contexts/NotyfContext";
import AccountActivation from "./components/AccountActivation/AccountActivation";

const AccountGenerals = () => {
  const { user } = useAuth();

  const notyf = useContext(NotyfContext);

  const resend_verification_email = () => {
    axios
      .post(
        "http://localhost/semaapi/public/api//email/verification-notification",
        { user }
      )
      .then((res) => {
        notyf.success("Verification email sent!");
      })
      .catch((e) => {
        notyf.error("Could not send verification email");
      });
  };
  let verifyEmailComponent = null;
  if (user !== null) {
    verifyEmailComponent =
      user.email_verified_at === null ? (
        <Card>
          <Card.Header tag="h5">Email Verification</Card.Header>
          <Card.Body className="m-sm-4">
            <p className="text-center">
              <span className="text-danger fs-4">
                Your email is not verified!
              </span>
            </p>
            <br></br>{" "}
            <p className="text-center fs-4">
              Please check your inbox and click the verification link. Or
            </p>
            <div className="d-flex justify-content-center">
              <Button
                className="text-center"
                onClick={resend_verification_email}
                variant="outline-primary"
                size="lg"
              >
                Resend verification email!
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : null;
  }

  return (
    <React.Fragment>
      <Helmet title="Account" />
      <Container fluid className="p-0">
        <Row>
          <Col md={10}>
            <h1 className="h3 mb-3">General Account settings</h1>
          </Col>
          <Col>
            <h4>
              Status:<span className="text-warning"> Trial </span>
            </h4>
          </Col>
        </Row>
        <Row>
          {/* <Card>
            <Card.Header tag="h5">
              Edit general account settings<br></br>
            </Card.Header>
            <Card.Body className="m-sm-4"></Card.Body>
          </Card> */}
          {verifyEmailComponent}

          <AccountActivation />
          {/* <AccountInfo /> */}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AccountGenerals;
