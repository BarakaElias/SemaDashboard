import React from "react";
// import { Helmet } from "react-helmet-async";

import { Form, Row, Col, Table } from "react-bootstrap";
import { FieldArray, Field, ErrorMessage } from "formik";
// import { Navigate } from "react-router";
import { Check, Loader, X } from "react-feather";
import MatrixRadioTable from "./complex/MatrixRadioTable";

const formControl = (props) => {
  let inputControl = null;
  let ind = -1;
  // console.log("h", props.initValue);

  // console.log(props.controlName);
  switch (props.type) {
    case "text":
      inputControl = (
        <Form.Group key={props.placeHolder} className="mb-3">
          <Form.Label key={props.placeHolder + "label"}>
            {props.label}
          </Form.Label>
          <Form.Control
            // onChange={(event) => props.setValToState(event, props.ident)}
            type="text"
            onBlur={props.onControlBlur}
            onChange={props.handleChange}
            name={props.controlName}
            value={props.initValue}
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
            // onChange={(event) => props.setValToState(event, props.ident)}
            onChange={props.handleChange}
            name={props.controlName}
            value={props.initValue}
            placeholder={props.placeHolder}
          >
            <option></option>
            {props.options.map((option) =>
              props.initValue === option ? (
                <option key={option} value={option} selected>
                  {option}
                </option>
              ) : (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
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
            onChange={props.handleChange}
            name={props.controlName}
            value={props.initValue}
            key={props.placeHolder + "control"}
            as="textarea"
            placeholder={props.placeHolder}
          />
        </Form.Group>
      );
      break;
    case "checkbox":
      inputControl = props.initValue ? (
        <Form.Group key={props.label} className="m-5 w-25">
          <Form.Label key={props.label + "label"}>
            Is the Sender ID Active?
          </Form.Label>
          <Form.Check
            type="checkbox"
            onChange={props.handleChange}
            name={props.controlName}
            value={props.initValue}
            checked
            variant={"lg"}
            key={props.label + "control"}
            label="Active"
          />
        </Form.Group>
      ) : (
        <Form.Group key={props.label} className="m-5 w-25">
          <Form.Label key={props.label + "label"}>
            Is the Sender ID Active?
          </Form.Label>
          <Form.Check
            type="checkbox"
            onChange={props.handleChange}
            name={props.controlName}
            variant={"lg"}
            value={props.initValue}
            key={props.label + "control"}
            label="Active"
          />
        </Form.Group>
      );
      break;
    case "mno-matrix":
      const mnos = ["Vodacom", "Airtel", "Halotel", "Zantel"];
      const vendors = [
        "Vodacom",
        "Airtel",
        "Halotel",
        "Zantel",
        "TTCL",
        "Tigo",
        "Smile",
      ];

      inputControl = <MatrixRadioTable />;
      break;
    // case "matrix":
    //   inputControl = (
    //     <FieldArray name="registered_networks">
    //       {(fieldArrayProps) => {
    //         const { push, remove, form } = fieldArrayProps;
    //         const { values } = form;
    //         var { registered_networks } = values;
    //         // console.log("a", registered_networks);

    //         if (registered_networks == null || "") {
    //           registered_networks = [
    //             {
    //               network: "",
    //               registerer: "",
    //               status: "",
    //             },
    //           ];
    //           // return <div>h</div>;
    //         }

    //         return (
    //           <div className="d-lg-flex flex-wrap">
    //             {registered_networks.map((network, index) => {
    //               // console.log(props.initValue);
    //               return (
    //                 <Form.Group className="p-1" key={index}>
    //                   <Form.Label>Mobile Network {index}</Form.Label>
    //                   <br></br>
    //                   <label>Network</label>
    //                   <Field
    //                     className="form-control w-100"
    //                     placeholder="Network"
    //                     value={network.network}
    //                     name={`registered_networks[${index}].network`}
    //                   />
    //                   <label>Registerer</label>
    //                   <Field
    //                     className="form-control w-100"
    //                     placeholder="Network registered under"
    //                     value={network.registerer}
    //                     name={`registered_networks[${index}].registerer`}
    //                   />
    //                   <label>Status</label>
    //                   <Field
    //                     className="form-control w-100"
    //                     placeholder="Pending/Registered"
    //                     value={network.status}
    //                     name={`registered_networks[${index}].status`}
    //                   />

    //                   <button
    //                     className="btn btn-secondary"
    //                     type="button"
    //                     onClick={() => remove(index)}
    //                   >
    //                     -
    //                   </button>
    //                   <button
    //                     className="btn btn-success"
    //                     type="button"
    //                     onClick={() => push("")}
    //                   >
    //                     +
    //                   </button>
    //                 </Form.Group>
    //               );
    //             })}
    //           </div>
    //         );
    //       }}
    //     </FieldArray>
    //   );
    //   break;
    default:
      break;
  }

  return inputControl;
};

export default formControl;
