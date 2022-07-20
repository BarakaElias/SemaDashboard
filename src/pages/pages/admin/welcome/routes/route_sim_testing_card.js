import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RouteSmsCard = () => (
  <Card>
    <Card.Header></Card.Header>
    <Card.Body>
      <FontAwesomeIcon icon={faLink} className="text-primary" size="6x" />
      <br></br>
      <br></br>
      <h2>Route Testing</h2>
      <h5>Test SMPP routes and sms</h5>
      <div className="d-flex justify-content-end">
        <Link
          className="btn btn-primary"
          to="/admin/administration/route_sim_testing"
        >
          Go &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </Card.Body>
  </Card>
);

export default RouteSmsCard;
