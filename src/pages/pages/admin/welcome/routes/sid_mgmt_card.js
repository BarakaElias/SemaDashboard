import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { faArrowRight, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SenderIDCard = () => (
  <Card>
    <Card.Header></Card.Header>
    <Card.Body>
      <FontAwesomeIcon icon={faIdCard} className="text-warning" size="6x" />
      <br></br>
      <br></br>
      <h2>Sender ID Management</h2>
      <h5>Manage Sender IDs</h5>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary" to="/admin/admin_manage_sender_ids">
          Go &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </Card.Body>
  </Card>
);

export default SenderIDCard;
