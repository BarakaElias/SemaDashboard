import React from "react";
// import { Helmet } from "react-helmet-async";

import { Button, Modal } from "react-bootstrap";
// import { Navigate } from "react-router";
import { AlertCircle, ThumbsUp } from "react-feather";

const AlertDialog = (props) => {
  // const notyf = useContext(NotyfContext);
  let alertElements = { ...props.content };
  let icon = null;
  switch (alertElements.type) {
    case "certainty":
      icon = (
        <AlertCircle
          color="#FFDF82"
          className="align-middle mb-3 me-1"
          size={128}
        />
      );
      break;
    case "successful":
      icon = (
        <ThumbsUp
          color="#8BC2A8"
          className="align-middle mb-3 me-1"
          size={128}
        />
      );
      break;
    default:
      break;
  }

  return (
    <Modal show={true} centered>
      <Modal.Header>
        <h2>{alertElements.title}</h2>
      </Modal.Header>
      <Modal.Body className="text-center m-3">
        {icon}
        <p className="mb-0">{alertElements.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.closeAlertFunc}>
          Close
        </Button>{" "}
        <Button onClick={props.sendSMSFunc}>OKAY</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertDialog;
