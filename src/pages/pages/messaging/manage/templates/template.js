import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Card, Container, Row, Button } from "react-bootstrap";
import TemplateTable from "./templateTable";
import ModalForm from "../../../../ui/ModalForm/modalForm";

const SmsTemplates = (props) => {
  const [modalState, setModalState] = useState({
    modalOpen: false,
  });
  const closeModal = () => {
    setModalState({ modalOpen: false });
  };
  const modalFormElements = {
    title: {
      value: "Create a New Template",
    },
    templateName: {
      label: "Template Name",
      type: "text",
      placeHolder: "Enter template name",
      required: true,
      options: null,
    },
    variables: {
      type: "select",
      label: "Insert Variables",
      placeHolder: "Enter variables",
      required: true,
      options: [
        "",
        "Variable 1",
        "Variable 2",
        "Variable 3",
        "Variable 4",
        "Variable 5",
      ],
    },
    template_text: {
      label: "Template Text",
      type: "textarea",
      placeHolder: "Enter text message here",
      required: false,
      options: null,
    },
    submitButton: {
      type: "button",
      placeHolder: "Create Template",
    },
  };
  const onRequestButtonClicked = () => {
    setModalState({ modalOpen: true });
  };
  let form = modalState.modalOpen ? (
    <ModalForm content={modalFormElements} closeModalFunc={closeModal} />
  ) : null;
  return (
    <React.Fragment>
      {form}
      <Helmet title="SMS Templates" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Template Manager</h1>
        <Card>
          <Card.Header>
            <Card.Title tag="h5">SMS TEMPLATES</Card.Title>
            <h6 className="card-subtitle mb-3 text-muted">All sms templates</h6>
            <Button
              variant="success"
              size="lg"
              onClick={onRequestButtonClicked}
            >
              CREATE A NEW TEMPLATE
            </Button>
          </Card.Header>
          <Card.Body>
            <Row>
              <TemplateTable />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default SmsTemplates;
