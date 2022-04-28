import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Card, Container, Row, Button } from "react-bootstrap";
import ContactListsTable from "./contactlistsTable";
import DashboardLayout from "../../../layouts/Dashboard";
import ModalForm from "../../ui/ModalForm/modalForm";
import { initialValues, validationSchema } from "./FormikForm";

const ContactLists = (props) => {
  const [modalState, setModalState] = useState({
    modalOpen: false,
  });
  const closeModal = () => {
    setModalState({ modalOpen: false });
  };
  const modalFormElements = {
    title: {
      value: "Create a New Contact List",
    },
    contactListName: {
      label: "Contact List Name",
      type: "text",
      placeHolder: "Enter the name of your contact list",
      required: true,
      options: null,
    },
    submitButton: {
      type: "button",
      placeHolder: "Create List",
    },
  };
  const onRequestButtonClicked = () => {
    setModalState({ modalOpen: true });
  };
  let form = modalState.modalOpen ? (
    <ModalForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      content={modalFormElements}
      closeModalFunc={closeModal}
    />
  ) : null;
  return (
    <DashboardLayout>
      <React.Fragment>
        {form}

        <Helmet title="SMS CONTACT LISTS" />
        <Container fluid className="p-0">
          <h1 className="h3 mb-3">Contact Lists</h1>
          <Card>
            <Card.Header>
              <Card.Title tag="h5">SMS CONTACT LISTS</Card.Title>
              <h6 className="card-subtitle mb-3 text-muted">
                All SMS Contact Lists
              </h6>
              <Button
                variant="success"
                size="lg"
                onClick={onRequestButtonClicked}
              >
                ADD A NEW CONTACT LIST
              </Button>
            </Card.Header>
            <Card.Body>
              <Row>
                <ContactListsTable />
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    </DashboardLayout>
  );
};

export default ContactLists;
