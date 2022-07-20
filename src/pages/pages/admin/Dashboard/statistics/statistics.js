import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import CountryStats from "./country_stats/country_stats";
import CustomerDeliveryStats from "./customer_delivery_stats/customer_delivery_stats";
import CustomerStatsPieChart from "./customer_stats/customer_stats";
import ErrorCodes from "./error_codes/error_codes";
import RechargesSummaryTable from "./recharges/recharges";
import RouteStatsPieChart from "./route_stats/route_stats";
import CustomerStatsTable from "./route_stats/table/customer_stats_table";
import RouteStatsTable from "./route_stats/table/route_stats_table";
import SmsTrafficStats from "./sms_traffic_stats/sms_traffic_stats";
import TodayStats from "./today_stats/today_stats";

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
              <Card.Body className="m-sm-4">
                <TodayStats />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Error codes</Card.Header>
              <Card.Body className="m-sm-4">
                <ErrorCodes />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Customer Stats Graph</Card.Header>
              <Card.Body className="m-sm-4">
                <CustomerStatsPieChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* nodes  &  dc monitoring */}
        <Row>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Route Stats Graph</Card.Header>
              <Card.Body className="m-sm-4">
                <RouteStatsPieChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Country Stats Graph</Card.Header>
              <Card.Body className="m-sm-4">
                <CountryStats />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header tag="h5">Last Ten Recharges</Card.Header>
              <Card.Body className="m-sm-4">
                <RechargesSummaryTable />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Connected vendor accounts & not connected vendor accounts */}
        <Row>
          <Col md={12} sm={12}>
            <SmsTrafficStats />
          </Col>
        </Row>
        {/* online ca & offline ca */}
        <Row>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Route Stats</Card.Header>
              <Card.Body className="m-sm-4">
                <RouteStatsTable />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Customer Stats</Card.Header>
              <Card.Body className="m-sm-4">
                <CustomerStatsTable />
              </Card.Body>
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
              <Card.Body className="m-sm-4">
                <CustomerDeliveryStats />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Monitoring;
