import React from "react";
// import { Helmet } from "react-helmet-async";

import { Form, Row, Col } from "react-bootstrap";
// import { Navigate } from "react-router";

const formControl = (props) => {
  let inputControl = null;
  switch (props.type) {
    case "text":
      inputControl = (
        <Form.Group key={props.placeHolder} className="mb-3">
          <Form.Label key={props.placeHolder + "label"}>
            {props.label}
          </Form.Label>
          <Form.Control
            onChange={(event) => props.setValToState(event, props.ident)}
            type="text"
            value={props.value}
            key={props.placeHolder + "control"}
            placeholder={props.placeHolder}
          />
        </Form.Group>
      );
      break;
    case "select":
      inputControl = (
        <Form.Group key={props.placeHolder} className="mb-3">
          <Form.Label key={props.placeHolder + "label"}>
            {props.label}
          </Form.Label>
          <Form.Select
            key={props.placeholder + "select"}
            onChange={(event) => props.setValToState(event, props.ident)}
            placeholder={props.placeHolder}
          >
            <option></option>
            {props.options.map((option) => (
              <option>{option}</option>
            ))}
          </Form.Select>
        </Form.Group>
      );
      break;
    case "textarea":
      inputControl = (
        <Form.Group key={props.placeHolder} className="mb-3">
          <Form.Label key={props.placeHolder + "label"}>
            {props.label}
          </Form.Label>
          <Form.Control
            key={props.placeHolder + "control"}
            as="textarea"
            placeholder={props.placeHolder}
          />
        </Form.Group>
      );
      break;
    case "checkbox":
      inputControl = (
        <Form.Group key={props.label} className="m-5 w-25">
          <Form.Label key={props.label + "label"}>
            Is the Sender ID Active?
          </Form.Label>
          <Form.Check
            type="checkbox"
            value="Active"
            variant={"lg"}
            key={props.label + "control"}
            label="Active"
          />
        </Form.Group>
      );
      break;
    case "two-times-selection":
      inputControl = (
        <Row className="g-2" key={props.label}>
          <h4>{props.label}</h4>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Mno</Form.Label>
              <Form.Select>
                <option>Vodacom</option>
                <option>Tigo</option>
                <option>Airtel</option>
                <option>Halotel</option>
                <option>Zantel</option>
                <option>TTCL</option>
                <option>Smile</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  label="Registered"
                  name={props.label}
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="Not Registered"
                  name={props.label}
                  type="radio"
                  id="inline-radio-2"
                />
                <Form.Check
                  inline
                  label="Pending"
                  type="radio"
                  name={props.label}
                  id="inline-radio-3"
                />
              </div>
            </Form.Group>
          </Col>
        </Row>
      );
      break;
    default:
      break;
  }

  return inputControl;
};

export default formControl;
