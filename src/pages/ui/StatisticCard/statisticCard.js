import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Users, DollarSign, MessageCircle, ShoppingBag } from "react-feather";

const statisticCard = (props) => {
  let icon = null;
  switch (props.icon) {
    case "balance":
      icon = <DollarSign className="align-middle text-success" />;
      break;
    case "contact":
      icon = <Users className="align-middle text-success" />;
      break;
    case "sent":
      icon = <MessageCircle className="align-middle text-success" />;
      break;
    case "cost":
      icon = <ShoppingBag className="align-middle text-success" />;
      break;
    default:
      break;
  }
  return (
    <Card className="flex-fill">
      <Card.Body className=" py-4">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <h3 className="mb-2">{props.value}</h3>
            <p className="mb-2">{props.title}</p>
            <div className="mb-0">
              <Badge bg="" className="badge-soft-success me-2">
                +8.65%
              </Badge>
              <span className="text-muted">Since last week</span>
            </div>
          </div>
          <div className="d-inline-block ms-3">
            <div className="stat">{icon}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default statisticCard;
