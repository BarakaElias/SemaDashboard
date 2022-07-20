import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";
import RouteSmsCard from "./routes/route_sim_testing_card";
import SenderIDCard from "./routes/sid_mgmt_card";
import AccountsCard from "./routes/accounts_card";

const WelcomeDashboard = () => {
  // const user = useSelector((state: RootStateOrAny) => state.user.value);

  return (
    <React.Fragment>
      <Helmet title="Manage Sender IDs" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Welcome to Sema Dashboard</h1>
        <Row>
          <Col md={3}>
            <RouteSmsCard />
          </Col>
          <Col md={3}>
            <SenderIDCard />
          </Col>
          <Col md={3}>
            <AccountsCard />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default WelcomeDashboard;
