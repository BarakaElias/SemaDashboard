import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
import FormControl from "./formControl";

import { Button, Modal, Form } from "react-bootstrap";
import { useSelector, RootStateOrAny } from "react-redux";

const ModalForm = (props) => {
  const user = useSelector((state: RootStateOrAny) => state.user.value);
  let formEl = { ...props.content };
  const formElementsArray = [];
  // const formElObject = {};
  for (let key in formEl) {
    if (key !== "title" && key !== "submitButton") {
      formElementsArray.push({
        key: key,
        config: formEl[key],
      });
    }
  }

  const [modalForm, setModalFormState] = useState({ modForm: props.content });
  const inputChangedHandler = (event, inputIdent) => {
    const updatedForm = { ...modalForm.modForm };
    updatedForm[inputIdent].value = event.target.value;
    setModalFormState({ modForm: updatedForm });
  };

  const formDataToParams = () => {
    const params = {
      api_id: user.api_id,
      api_password: user.api_password,
    };
    for (let data in { ...modalForm.modForm }) {
      if (data !== "submitButton" && data !== "title") {
        const val = modalForm.modForm[data].value;
        params[data] = val;
      }
    }
    props.submitFormFunc(params);
  };

  return (
    <Modal show={true} centered>
      <Modal.Header>
        <h2>{formEl["title"].value}</h2>
      </Modal.Header>
      <Modal.Body className="text-center m-3">
        <Form>
          {formElementsArray.map((formElement) => (
            <FormControl
              ident={formElement.key}
              type={formElement.config.type}
              label={formElement.config.label}
              placeHolder={formElement.config.placeHolder}
              required={formElement.config.required}
              options={formElement.config.options}
              setValToState={inputChangedHandler}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.closeModalFunc}>
          Cancel
        </Button>{" "}
        <Button onClick={formDataToParams}>
          {formEl["submitButton"].placeHolder}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
