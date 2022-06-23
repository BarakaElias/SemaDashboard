import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";
import PrivateInfo from "./forms/PrivateInfo";
import PublicInfo from "./forms/PublicInfo";

const Navigation = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Profile Settings
      </Card.Title>
    </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item tag="a" href="#" action active>
        Account
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Password
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Privacy and safety
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Email notifications
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Web notifications
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Widgets
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Your data
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Delete account{" "}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

const MyProfile = () => (
  <React.Fragment>
    <Helmet title="My Profile" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Settings</h1>

      <Row>
        {/* <Col md="3" xl="2"> */}
        {/* <Navigation /> */}
        {/* </Col> */}
        <Col xl="10">
          <PublicInfo />
          <PrivateInfo />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default MyProfile;
