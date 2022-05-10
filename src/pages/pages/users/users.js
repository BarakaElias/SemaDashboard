import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Badge,
  Card,
  Col,
  Container,
  Row,
  Table,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import avatar1 from "./../../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar-5.jpg";

import UserList from "./users_table.js/user_list";

const Single = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Angelica Ramos
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Row className="g-0">
        <Col sm="3" xl="12" className="col-xxl-3 text-center">
          <img
            src={avatar3}
            width="64"
            height="64"
            className="rounded-circle mt-2"
            alt="Angelica Ramos"
          />
        </Col>
        <Col sm="9" xl="12" className="col-xxl-9">
          <strong>About me</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </Row>

      <Table size="sm" className="my-2">
        <tbody>
          <tr>
            <th>Name</th>
            <td>Angelica Ramos</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>The Wiz</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>angelica@ramos.com</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>+1234123123123</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>
              <Badge bg="success">Active</Badge>
            </td>
          </tr>
        </tbody>
      </Table>

      <hr />

      <strong>Activity</strong>

      <ul className="timeline mt-2">
        <li className="timeline-item">
          <strong>Signed out</strong>
          <span className="float-end text-muted text-sm">30m ago</span>
          <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
        </li>
        <li className="timeline-item">
          <strong>Created invoice #1204</strong>
          <span className="float-end text-muted text-sm">2h ago</span>
          <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
        </li>
        <li className="timeline-item">
          <strong>Discarded invoice #1147</strong>
          <span className="float-end text-muted text-sm">3h ago</span>
          <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
        </li>
        <li className="timeline-item">
          <strong>Signed in</strong>
          <span className="float-end text-muted text-sm">3h ago</span>
          <p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
        </li>
        <li className="timeline-item">
          <strong>Signed up</strong>
          <span className="float-end text-muted text-sm">2d ago</span>
          <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
        </li>
      </ul>
    </Card.Body>
  </Card>
);

const Users = () => (
  <React.Fragment>
    <Helmet title="Usesrs" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">
        Users{" "}
        {/* <Link to="/users/add_user" className="me-1 mb-1 outline-primary">
          Add New
        </Link> */}
      </h1>

      <Row>
        <Col xl="8">
          <UserList />
        </Col>
        <Col xl="4">
          <Single />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Users;
