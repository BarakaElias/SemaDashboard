import React from "react";
import { Card, Row, Container, Col, Button, Flex } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountActivation = () => {
  return (
    <Card>
      <Card.Header tag="h5">
        <strong> Account Activation </strong> <br></br>
      </Card.Header>
      <Card.Body className="m-sm-4">
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <p className="text-center fs-4">
              You are currently using a free trial account. You can use it to
              explore the services offered by Sema Communications although some
              features are limited until you activate your account.
            </p>
            <p className="text-center fs-4">
              {" "}
              Activation does not take long and is{" "}
              <span className="text-primary">Free of Charge</span>.
            </p>
            <div className="d-flex justify-content-center">
              <Link
                className="btn btn-success btn-lg"
                to="/account/activate_account"
              >
                Activate Account
              </Link>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccountActivation;
