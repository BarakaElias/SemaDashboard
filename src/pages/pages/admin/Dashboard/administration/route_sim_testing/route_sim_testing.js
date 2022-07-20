import React from "react";
import { Card, Row, Container, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import RouteSimTestTabs from "./route_sim_test_tabs";
import RouteSimTestingTable from "./tables/route_sim_testing_table";

const RouteSimTesting = () => {
  return (
    <React.Fragment>
      <Helmet title="Route/SIM Testing" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Route/SIM Testing</h1>
        <Row>
          <RouteSimTestTabs />
          {/* <RouteTestForm /> */}
          <Col>{/* <RouteTestForm /> */}</Col>
        </Row>
        <Row>
          <Card>
            <Card.Header>
              <Row>
                <Col md={10}>ROUTE/SIM TEST HISTORY</Col>
                <Col md={2}>
                  <div className="d-flex flex-row justify-content-between">
                    <Button variant="danger">Delete Selected</Button>
                    <Button variant="primary">Refresh</Button>
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="m-sm-4">
              {/* <h1>the route/sim test table</h1> */}
              <RouteSimTestingTable />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default RouteSimTesting;
