import React, { useState } from "react";

import { Badge, Card, Dropdown, Table, Col, Form, Row } from "react-bootstrap";
// import InputMask from "react-input-mask";

import { MoreHorizontal } from "react-feather";

const Projects = () => {
  const [formState, setFormState] = useState({
    contactListForm: {
      start_date: {
        required: false,
        value: "",
        hasError: false,
      },
      end_date: {
        required: false,
        value: "",
        hasError: false,
      },
    },
  });
  const checkValidity = (value, isRequired) => {
    let isValid = true;
    if (isRequired) {
      isValid = value.trim() === "";
      return isValid;
    }
    return !isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    // console.log(event.target.value);
    const updatedQuickSMSForm = { ...formState.contactListForm };
    const updatedFormElement = { ...updatedQuickSMSForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.hasError = checkValidity(
      updatedFormElement.value,
      updatedFormElement.required
    );
    updatedQuickSMSForm[inputIdentifier] = updatedFormElement;
    setFormState({ contactListForm: updatedQuickSMSForm });
    console.log(updatedQuickSMSForm);
  };
  return (
    <Card className="flex-fill w-100">
      <Card.Header>
        <div className="card-actions float-end">
          <Dropdown align="end">
            <Dropdown.Toggle as="a" bsPrefix="-">
              <MoreHorizontal />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another Action</Dropdown.Item>
              <Dropdown.Item>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Card.Title tag="h5" className="mb-0">
          DELIVERY STATS
        </Card.Title>
      </Card.Header>
      <Row className="w-75 m-2">
        <Col lg="6">
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              onChange={(event) => inputChangedHandler(event, "start_date")}
              type="date"
            />
            <span className="text-muted">e.g "MM/DD/YYYY"</span>
          </Form.Group>
        </Col>
        <Col lg="6">
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              onChange={(event) => inputChangedHandler(event, "end_date")}
              type="date"
            />
            <span className="text-muted">e.g "MM/DD/YYYY"</span>
          </Form.Group>
        </Col>
      </Row>
      <Table striped className="my-0">
        <thead>
          <tr>
            <th>SMS Status</th>
            <th className="d-none d-xl-table-cell">SMS Count</th>
            <th className="d-none d-xl-table-cell">Parts Count</th>
            <th>Billed Amount</th>
            <th className="d-none d-md-table-cell">Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Delivered</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="success">Done</Badge>
            </td>
            <td className="d-none d-md-table-cell">Carl Jenkins</td>
          </tr>
          <tr>
            <td>Undeliverable</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Bertha Martin</td>
          </tr>
          <tr>
            <td>Acknowledge</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="success">Done</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
          <tr>
            <td>Expired</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="warning">In progress</Badge>
            </td>
            <td className="d-none d-md-table-cell">Carl Jenkins</td>
          </tr>
          <tr>
            <td>Accepted</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="success">Done</Badge>
            </td>
            <td className="d-none d-md-table-cell">Bertha Martin</td>
          </tr>
          <tr>
            <td>Rejected</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="success">Done</Badge>
            </td>
            <td className="d-none d-md-table-cell">Ashley Briggs</td>
          </tr>
          <tr>
            <td>Unknown</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="warning">In progress</Badge>
            </td>
            <td className="d-none d-md-table-cell">Bertha Martin</td>
          </tr>
          <tr>
            <td>Failed</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
          <tr>
            <td>DND</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
          <tr>
            <td>None</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
          <tr>
            <td>Enroute</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
          <tr>
            <td>Deleted</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
          <tr>
            <td>Submitted</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
          <tr>
            <td>Total</td>
            <td className="d-none d-xl-table-cell">01/01/2021</td>
            <td className="d-none d-xl-table-cell">31/06/2021</td>
            <td>
              <Badge bg="danger">Cancelled</Badge>
            </td>
            <td className="d-none d-md-table-cell">Stacie Hall</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Projects;
