import React from "react";
import RouteTestForm from "./forms/route_test_form";
import SmsTestForm from "./forms/sms_test_form";

import { Nav, Tab } from "react-bootstrap";
const RouteSimTestTabs = () => (
  <div className={"tab"}>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="first">Route Test</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Test SMS</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          {/* <h4 className="tab-title">tabs</h4> */}
          <RouteTestForm />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          {/* <h4 className="tab-title">Another one</h4> */}
          <SmsTestForm />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
);

export default RouteSimTestTabs;
