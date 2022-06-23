import React, { useState, useContext } from "react";
import { Card, Row, Container, Badge, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Code } from "react-feather";
import axios from "axios";
import ModalForm from "../../ui/ModalForm/modalForm";
import NotyfContext from "../../../contexts/NotyfContext";

const AccountGenerals = () => {
  const notyf = useContext(NotyfContext);

  axios
    .get("http://localhost/semaapi/public/api/get_api_keys")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  //modal manipulation
  const [modalState, setModalState] = useState({ modalOpen: false });

  const closeModal = () => {
    setModalState({ modalOpen: false });
  };

  const openModal = () => {
    setModalState({ modalOpen: true });
  };

  const modalFormElements = {
    title: {
      value: "Change API Password",
    },
    api_id: {
      label: "api_id",
      type: "text",
      placeHolder: "",
      required: "true",
      options: null,
    },
    api_password: {
      label: "api_password",
      type: "text",
      placeHolder: "",
      required: true,
      options: null,
    },
    submitButton: {
      type: "button",
      placeHolder: "Change Password",
    },
  };

  const initialValues = {
    api_id: "",
    api_password: "",
  };
  const submitFormFunc = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost/semaapi/public/api/change_api_keys",
        {
          api_password: values.api_password,
          company_id: "2020",
          platform: "sms",
        }
      );
      console.log(response);
      if (response.status === 200) {
        notyf.success("Api password updated");
        setModalState({ modalOpen: false });
      }
    } catch (e) {
      console.log("Change api password:", e);
    }
  };

  let form = modalState.modalOpen ? (
    <ModalForm
      initialValues={initialValues}
      content={modalFormElements}
      closeModalFunc={closeModal}
      submitFormFunc={submitFormFunc}
    />
  ) : null;

  return (
    <React.Fragment>
      {form}
      <Helmet title="New Accounts" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Account API</h1>
        <Row>
          <Card>
            <Card.Header tag="h5">
              Edit API keys<br></br>
            </Card.Header>
            <Card.Body className="m-sm-4">
              <div className="text-center">
                <Code size={32} />
                <br />
                <h2>
                  <Badge bg="secondary">API83792928</Badge>
                </h2>
                <br />
                <br />
                <Button onClick={openModal} variant="outline-primary">
                  Change API Password
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>API Documentation</Card.Header>
            <Card.Body>
              <div className="text-center">
                <h3>Download the SMS API Documentation</h3>
                <br></br>
                <br></br>
                <Button variant="outline-primary">
                  Download Documentation
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AccountGenerals;
