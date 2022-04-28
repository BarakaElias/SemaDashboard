import React from "react";
import { Col, Row } from "react-bootstrap";

// import { DollarSign, ShoppingBag, Users, MessageCircle } from "react-feather";

//STATISTIC IMPORTS
import CheckBalance from "./statisticsData/balance";
import Cost from "./statisticsData/cost";
import Contact from "./statisticsData/contact";
import SmsSent from "./statisticsData/smsSent";

// import illustration from "../../../assets/img/illustrations/customer-support.png";

const Statistics = () => {
  // const { t } = useTranslation();

  return (
    <Row>
      {/* <Col md="6" xl className="d-flex">
        <Card className="illustration flex-fill">
          <Card.Body className="p-0 d-flex flex-fill">
            <Row className="g-0 w-100">
              <Col xs="6">
                <div className="illustration-text p-3 m-1">
                  <h4 className="illustration-text">
                    {t("Welcome back")}, Chris!
                  </h4>
                  <p className="mb-0">AppStack Dashboard</p>
                </div>
              </Col>
              <Col xs={6} className="align-self-end text-end">
                <img
                  src={illustration}
                  alt="Customer Support"
                  className="img-fluid illustration-img"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col> */}
      <Col md="6" xl className="d-flex">
        {/* <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">250</h3>
                <p className="mb-2">SMS Sent</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +5.35%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <MessageCircle className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card> */}
        <SmsSent />
      </Col>
      <Col md="6" xl className="d-flex">
        {/* <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">4300</h3>
                <p className="mb-2">Cost</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-danger me-2">
                    -4.25%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <ShoppingBag className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card> */}
        <Cost />
      </Col>
      <Col md="6" xl className="d-flex">
        {/* <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">58000</h3>
                <p className="mb-2">Current Balance</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +8.65%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <DollarSign className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card> */}
        <CheckBalance />
      </Col>
      <Col md="6" xl className="d-flex">
        {/* <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">58</h3>
                <p className="mb-2">Total Contacts</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +8.65%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <Users className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card> */}
        <Contact />
      </Col>
    </Row>
  );
};

export default Statistics;
