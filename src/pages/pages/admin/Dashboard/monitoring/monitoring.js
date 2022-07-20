import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import DBServerCpuRamUsageChart from "./charts/db_server_cpu_ram/db_server_cpu_ram_chart";
import ConnectedVendorAccountsTable from "./tables/connected_vendor_accounts/connected_vendor_accounts";
import DCMonitoring from "./tables/dc_monitoring/dc_monitoring";
import HddStatsTable from "./tables/hdd_stats/hdd_stats_table";
import NodesMonitoring from "./tables/nodes_monitoring/nodes_monitoring";
import NotConnectedVendorAccountsTable from "./tables/not_connected_vendor_accounts/not_connected_vendor_accounts";
import OfflineCa from "./tables/offlineca/offlineca";
import OnlineCa from "./tables/onlineca/onlineca";

const Monitoring = () => {
  return (
    <React.Fragment>
      <Helmet title="Activate Account" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Monitoring</h1>
        <Row>
          <Col md={6} sm={12}>
            <DBServerCpuRamUsageChart />
          </Col>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">DB SERVER HDD STATS</Card.Header>
              <Card.Body className="m-sm-4">
                <HddStatsTable />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* nodes  &  dc monitoring */}
        <Row>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Nodes Monitoring</Card.Header>
              <Card.Body className="m-sm-4">
                {" "}
                <NodesMonitoring />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">DC Monitoring</Card.Header>
              <Card.Body className="m-sm-4">
                <DCMonitoring />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Connected vendor accounts & not connected vendor accounts */}
        <Row>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Connected vendor accounts</Card.Header>
              <Card.Body className="m-sm-4">
                <ConnectedVendorAccountsTable />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Not connected vendor accounts</Card.Header>
              <Card.Body className="m-sm-4">
                <NotConnectedVendorAccountsTable />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* online ca & offline ca */}
        <Row>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Online C.A.</Card.Header>
              <Card.Body className="m-sm-4">
                <OnlineCa />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
            <Card>
              <Card.Header tag="h5">Offline C.A.</Card.Header>
              <Card.Body className="m-sm-4">
                <OfflineCa />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Monitoring;
