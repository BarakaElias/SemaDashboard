import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { faArrowRight, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccountsCard = () => (
  <Card>
    <Card.Header></Card.Header>
    <Card.Body>
      <FontAwesomeIcon icon={faUsers} className="text-info" size="6x" />
      <br></br>
      <br></br>
      <h2>Accounts Management</h2>
      <h5>Manage Sema accounts</h5>
      <div className="d-flex justify-content-end">
        <Link
          className="btn btn-primary"
          to="/admin/manage_accounts/new_accounts"
        >
          Go &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </Card.Body>
  </Card>
);

export default AccountsCard;
