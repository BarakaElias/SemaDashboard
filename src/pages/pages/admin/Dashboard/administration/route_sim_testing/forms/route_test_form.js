import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

const RouteTestForm = () => {
  return (
    <Formik
      initialValues={{
        vendor_account: "",
        sms_encoding: "",
        sender_id: "",
        route_test_name: "",
        destination_number: "",
        repeat_count: "1",
        message_text: "",
      }}
      validationSchema={Yup.object().shape({
        vendor_account: Yup.string().required("Vendor Account Required"),
        sms_encoding: Yup.string().required("SMS Encoding required"),
        sender_id: Yup.string().required("Requires Sender Id"),
        route_test_name: Yup.string().required("Route test name required"),
        destination_number: Yup.string().required(
          "Enter atleast one phone number"
        ),
        repeat_count: Yup.string(),
        message_text: Yup.string().required("Enter message text"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const route_test = await axios.post();
          if (route_test === 200) {
            //success
          }
        } catch (err) {
          console.log("Submitting route form test", err);
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <Form onSubmit={handleSubmit}>
          {errors.submit && (
            <Alert className="my-3" variant="danger">
              <div className="alert-message">{errors.submit}</div>
            </Alert>
          )}
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Select Vendor Account</Form.Label>
                <Form.Select
                  size="lg"
                  name="vendor_account"
                  value={values.vendor_account}
                  isInvalid={Boolean(
                    touched.vendor_account && errors.vendor_account
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
                {!!touched.vendor_account && (
                  <Form.Control.Feedback type="invalid">
                    {errors.vendor_account}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Select SMS Encoding</Form.Label>
                <Form.Select
                  size="lg"
                  name="sms_encoding"
                  value={values.sms_encoding}
                  isInvalid={Boolean(
                    touched.sms_encoding && errors.sms_encoding
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option value="T">Text (Use for only English)</option>
                  <option value="U">Unicode (Use for all languages)</option>
                  <option value="F">Flash SMS (Use for only English)</option>
                  <option value="UF">
                    Unicode Flash SMS (Use for all languages)
                  </option>
                </Form.Select>
                {!!touched.sms_encoding && (
                  <Form.Control.Feedback type="invalid">
                    {errors.sms_encoding}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Sender ID</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="sender_id"
                  value={values.sender_id}
                  isInvalid={Boolean(touched.sender_id && errors.sender_id)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {!!touched.sender_id && (
                  <Form.Control.Feedback type="invalid">
                    {errors.sender_id}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Destination Number(With Country Code</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Eg. 255624123123. Add , for multiple numbers"
                  name="destination_number"
                  value={values.destination_number}
                  isInvalid={Boolean(
                    touched.destination_number && errors.destination_number
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {!!touched.destination_number && (
                  <Form.Control.Feedback type="invalid">
                    {errors.destination_number}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Route Test Name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="route_test_name"
                  value={values.route_test_name}
                  isInvalid={Boolean(
                    touched.route_test_name && errors.route_test_name
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {!!touched.route_test_name && (
                  <Form.Control.Feedback type="invalid">
                    {errors.route_test_name}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group className="mb-3">
                <Form.Label>Repeat Count</Form.Label>
                <Form.Select
                  size="lg"
                  name="repeat_count"
                  value={values.repeat_count}
                  isInvalid={Boolean(
                    touched.repeat_count && errors.repeat_count
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option value="T">Text (Use for only English)</option>
                  <option value="U">Unicode (Use for all languages)</option>
                  <option value="F">Flash SMS (Use for only English)</option>
                  <option value="UF">
                    Unicode Flash SMS (Use for all languages)
                  </option>
                </Form.Select>
                {!!touched.repeat_count && (
                  <Form.Control.Feedback type="invalid">
                    {errors.repeat_count}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Message Text</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="message_text"
                  value={values.message_text}
                  isInvalid={Boolean(
                    touched.message_text && errors.message_text
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {!!touched.message_text && (
                  <Form.Control.Feedback type="invalid">
                    {errors.message_text}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
          >
            Start Test
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RouteTestForm;
