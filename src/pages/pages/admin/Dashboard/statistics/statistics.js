import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const Monitoring = () => {
  return (
    <React.Fragment>
      <Helmet title="Activate Account" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Monitoring</h1>
        <Row>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Today Stats</Card.Header>
              <Card.Body className="m-sm-4">Today stats table</Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Error codes</Card.Header>
              <Card.Body className="m-sm-4">Error codes table</Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Customer Stats Graph</Card.Header>
              <Card.Body className="m-sm-4">Customer stats table</Card.Body>
            </Card>
          </Col>
        </Row>
        {/* nodes  &  dc monitoring */}
        <Row>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Route Stats Graph</Card.Header>
              <Card.Body className="m-sm-4">Route stats Graph</Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Country Stats Graph</Card.Header>
              <Card.Body className="m-sm-4">C Drive table</Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Last Ten Recharges</Card.Header>
              <Card.Body className="m-sm-4">C Drive table</Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Connected vendor accounts & not connected vendor accounts */}
        <Row>
          <Col md={12} sm={12}>
            <Card>
              <Card.Header tag="h5">LAST 24 HOUR SMS TRAFFIC STATS</Card.Header>
              <Card.Body className="m-sm-4">Realtime Graph</Card.Body>
            </Card>
          </Col>
        </Row>
        {/* online ca & offline ca */}
        <Row>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Route Stats</Card.Header>
              <Card.Body className="m-sm-4">Realtime Graph</Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Customer Stats</Card.Header>
              <Card.Body className="m-sm-4">C Drive table</Card.Body>
            </Card>
          </Col>
        </Row>
        {/* traffic graph & customer delivery stats */}
        <Row>
          <Col md={8} sm={12}>
            <Card>
              <Card.Header tag="h5">Traffic Graph</Card.Header>
              <Card.Body className="m-sm-4">Realtime Graph</Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Customer Delivery Stats</Card.Header>
              <Card.Body className="m-sm-4">C Drive table</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Monitoring;
