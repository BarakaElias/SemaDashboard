import { faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import { Helmet } from "react-helmet-async";

import { Form } from "react-bootstrap";
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
    default:
      break;
  }

  return inputControl;
};

export default formControl;
