import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import NotyfContext from "../../../../contexts/NotyfContext";
import { useSelector, RootStateOrAny } from "react-redux";
// import { retrieveSenderIDs } from "../../../redux/slices/senderids";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
// import DatePicker from "react-datetime";
import AlertDialog from "../../../ui/AlertDialog/AlertDialog";
import Timezones from "../../../../utils/timezones";
import sendSMS from "../../../../utils/sendSMS";
// import { GetDeliveryReport } from "./deliveryStatus";
import DashboardLayout from "../../../../layouts/Dashboard";
import Admin_sender_id_table, {
  Admin_sender_id,
} from "./admin_sender_id_table";

const Admin_sender_id_manager = () => {
  const user = useSelector((state: RootStateOrAny) => state.user.value);

  return (
    <DashboardLayout>
      <React.Fragment>
        <Helmet title="Manage Sender IDs" />
        <Container fluid className="p-0">
          <h1 className="h3 mb-3">Sender ID Management</h1>
          <Card>
            {/* <Card.Header>
              <Row>
                <Col>
                  <Card.Title tag="h5">Manage Sender IDs</Card.Title>
                  <h6 className="card-subititle text-muted">
                    Some subtitle goes here
                  </h6>
                </Col>
                <Col></Col>
              </Row>
            </Card.Header> */}
            <Card.Body>
              <Admin_sender_id_table />
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    </DashboardLayout>
  );
};

export default Admin_sender_id_manager;
