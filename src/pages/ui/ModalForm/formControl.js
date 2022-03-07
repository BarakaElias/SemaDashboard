import React from "react";
// import { Helmet } from "react-helmet-async";

import { Form, Row, Col } from "react-bootstrap";
// import { Navigate } from "react-router";

const formControl = (props) => {
  let inputControl = null;
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
    case "mno-matrix1":
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
    case "mno-matrix":
      let i = 0;
      const mnos = [
        "Vodacom",
        "Tigo",
        "Airtel",
        "Halotel",
        "Zantel",
        "TTCL",
        "Smile",
      ];
      inputControl = (
        <React.Fragment>
          <h3>Vendor registration status</h3>
          <table>
            <thead>
              <tr>
                <th>Vendor/MNO</th>
                <th>Vodacom</th>
                <th>Tigo</th>
                <th>Airtel</th>
                <th>Halotel</th>
                <th>Zantel</th>
                <th>TTCL</th>
                <th>Smile</th>
              </tr>
            </thead>
            <tbody>
              {mnos.map((mno) => (
                <tr key={mno + "th"}>
                  <th>{mnos[i]}</th>
                  {mnos.map((mno) => (
                    <td key={mno + "td"}>
                      <Form.Group className="m-1">
                        <Form.Select name={mno}>
                          <option>Not Registered</option>
                          <option>Registered</option>
                          <option>Pending</option>
                        </Form.Select>
                      </Form.Group>
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th>Vodacom</th>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>NotRegistered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
              </tr>
              <tr>
                <th>Tigo</th>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="m-1">
                    <Form.Select>
                      <option>Not Registered</option>
                      <option>Registered</option>
                      <option>Pending</option>
                    </Form.Select>
                  </Form.Group>
                </td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );
      break;
    default:
      break;
  }

  return inputControl;
};

export default formControl;
