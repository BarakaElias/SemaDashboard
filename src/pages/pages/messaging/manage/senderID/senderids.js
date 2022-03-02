import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Card, Container, Row, Button } from "react-bootstrap";
import SenderIDTable from "./senderidTable";
import ModalForm from "../../../../ui/ModalForm/modalForm";
import CountryList from "./countryList";
import axios from "axios";
import { initialValues, validationSchema } from "./FormikForm";

const SenderIDs = () => {
  const [modalState, setModalState] = useState({
    modalOpen: false,
  });
  const closeModal = () => {
    setModalState({ modalOpen: false });
  };
  const modalFormElements = {
    title: {
      value: "Request New Sender ID",
    },
    country: {
      type: "select",
      label: "Sender ID Country",
      placeHolder: "Select sender ID country",
      required: true,
      options: CountryList,
      value: "hi",
    },
    sender_id: {
      label: "Sender ID Name",
      type: "text",
      placeHolder: "Enter Sender ID",
      required: true,
      options: null,
      value: "dd",
    },
    remarks: {
      label: "Remarks",
      type: "text",
      placeHolder: "Enter remakrs (Optional)",
      required: false,
      options: null,
      value: "he",
    },
    submitButton: {
      type: "button",
      placeHolder: "Request",
    },
  };

  const onRequestButtonClicked = () => {
    setModalState({ modalOpen: true });
  };
  const requestSenderID = (parameters) => {
    axios
      .post("https://api.sema.co.tz/api/SenderIDRequest", {
        params: parameters,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let form = modalState.modalOpen ? (
    <ModalForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      content={modalFormElements}
      closeModalFunc={closeModal}
      submitFormFunc={requestSenderID}
    />
  ) : null;
  return (
    <React.Fragment>
      {form}
      <Helmet title="SMS Sender ID" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Sender ID Manager</h1>
        <Card>
          <Card.Header>
            <Card.Title tag="h5">Your Sender IDs</Card.Title>
            <h6 className="card-subtitle mb-3 text-muted">
              All sms Sender IDs
            </h6>
            <Button
              variant="success"
              onClick={onRequestButtonClicked}
              size="lg"
            >
              Create A New Sender ID
            </Button>
          </Card.Header>
          <Card.Body>
            <Row>
              <SenderIDTable />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default SenderIDs;
