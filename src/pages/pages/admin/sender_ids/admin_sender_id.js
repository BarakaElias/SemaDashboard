import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, RootStateOrAny } from "react-redux";
// import { retrieveSenderIDs } from "../../../redux/slices/senderids";
import { Card, Col, Container, Row } from "react-bootstrap";

import AdminSenderIdTable from "./admin_sender_id_table";

const AdminSenderIdManager = () => {
  // const user = useSelector((state: RootStateOrAny) => state.user.value);

  return (
    <React.Fragment>
      <Helmet title="Manage Sender IDs" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Sender ID Management</h1>
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Body>
                <AdminSenderIdTable />
              </Card.Body>
            </Card>
          </Col>
          {/* <Col lg={5}>
              <Card>
                <Card.Body>
                  <Matrix />
                </Card.Body>
              </Card>
            </Col> */}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AdminSenderIdManager;
