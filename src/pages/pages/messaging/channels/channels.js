import React from "react";
import { Helmet } from "react-helmet-async";

import { Card, Container, Row, Button } from "react-bootstrap";
import ChannelTable from "./channelTable";

const channels = () => (
  <React.Fragment>
    <Helmet title="SMS Channels" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Channel Manager</h1>

      <Card>
        <Card.Header>
          <Card.Title tag="h5">Channel Manager</Card.Title>
          <h6 className="card-subtitle mb-3 text-muted">All sms channels</h6>
          <Button variant="success">Export To Excel</Button>
        </Card.Header>
        <Card.Body>
          <Row>
            <ChannelTable />
          </Row>
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default channels;
