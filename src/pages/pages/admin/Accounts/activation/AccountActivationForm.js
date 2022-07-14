import React, { useContext } from "react";
import { Form, Alert, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import NotyfContext from "../../../../../contexts/NotyfContext";
// import { withRouter } from "react-router-dom";

const AccountActivationForm = () => {
  // const { id } = useParams();
  // console.log("statatata", id);
  const notyf = useContext(NotyfContext);
  const ActivateAccount = async (email, password) => {
    try {
      const response = await axios.post("activate_account", {
        email,
        password,
      });
      return { status: response.status, message: response.data };
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={{
        CompanyName: "",
        CompanyEmail: "",
        BillingEmail: "",
        Phone: "",
        CustomerPlanID: "",
        CustomerRouteID: "",
        DefaultSMSPrice: "",
        CurrencyID: "",
        BalanceAmount: "",
        TimeZoneID: "",
        BalanceAmount: "",
        TimeZoneID: "",
        TemplateLocked: "",
        CountryID: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
        user_email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("User email is required"),
        companyName: Yup.string().required("Company name is required"),
        CompanyEmail: Yup.string()
          .email("Must be valid email")
          .required("Company email is required"),
        BillingEmail: Yup.string()
          .email("Must be a valid email")
          .required("Billing email is required"),
        Phone: Yup.string().required("Phone number is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
        try {
          const activation = await ActivateAccount(
            values.email,
            values.password
          );

          console.log(activation);

          setStatus({ success: true });

          if (activation.status === 200) {
            notyf.success(activation.message);
          }
        } catch (e) {
          console.log(e);
          let message = e.message || "something went wrong while activating";
          if (e.message === "activation is undefined") {
            message = "Could not connect to Server";
          }

          setStatus({ success: false });
          setErrors({ submit: message });
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
              <Form.Group classname="mb-5">
                <Form.Label>Company name:</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="CompanyName"
                  placeholder=""
                  value={values.CompanyEmail}
                  isInvalid={Boolean(touched.CompanyName && errors.CompanyName)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {!!touched.CompanyName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.CompanyName}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>User email: (used when signed up)</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="user_email"
                  placeholder="User email"
                  value={values.user_email}
                  isInvalid={Boolean(touched.user_email && errors.user_email)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {!!touched.user_email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.user_email}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
          </Row>
          <br></br>
          <h3>Contact Information</h3>
          <Row>
            <Col>
              <Form.Group classname="mb-5">
                <Form.Label>Company email</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  name="CompanyEmail"
                  placeholder=""
                  value={values.CompanyEmail}
                  isInvalid={Boolean(
                    touched.CompanyEmail && errors.CompanyEmail
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {!!touched.CompanyEmail && (
                  <Form.Control.Feedback type="invalid">
                    {errors.CompanyEmail}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Billing email:</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  name="BillingEmail"
                  placeholder=""
                  value={values.BillingEmail}
                  isInvalid={Boolean(
                    touched.BillingEmail && errors.BillingEmail
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Support email</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  name="SupportEmail"
                  placeholder=""
                  value={values.password}
                  isInvalid={Boolean(
                    touched.SupportEmail && errors.SupportEmail
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
              {!!touched.SupportEmail && (
                <Form.Control.Feedback type="invalid">
                  {errors.SupportEmail}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="Phone"
                  placeholder="255624123123"
                  value={values.Phone}
                  isInvalid={Boolean(touched.Phone && errors.Phone)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <br></br>
          <h3>Pricing & Routes</h3>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Customer plan ID</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="CustomerPlanID"
                  placeholder=""
                  value={values.CustomerPlanID}
                  isInvalid={Boolean(
                    touched.CustomerPlanID && errors.CustomerPlanID
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Customer route ID</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="CustomerRouteID"
                  placeholder=""
                  value={values.CustomerRouteID}
                  isInvalid={Boolean(
                    touched.CustomerRouteID && errors.CustomerRouteID
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Default SMS price</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="DefaultSMSPrice"
                  placeholder=""
                  value={values.DefaultSMSPrice}
                  isInvalid={Boolean(
                    touched.DefaultSMSPrice && errors.DefaultSMSPrice
                  )}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Currency ID</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="CurrencyID"
                  placeholder=""
                  value={values.CurrencyID}
                  isInvalid={Boolean(touched.CurrencyID && errors.CurrencyID)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Balance Amount</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="BalanceAmount"
                    placeholder=""
                    value={values.BalanceAmount}
                    isInvalid={Boolean(
                      touched.BalanceAmount && errors.BalanceAmount
                    )}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Col>
          </Row>
          <br></br>
          <h3>Locale</h3>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>TimeZone</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="TimeZoneID"
                  placeholder=""
                  value={values.TimeZoneID}
                  isInvalid={Boolean(touched.TimeZoneID && errors.TimeZoneID)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Country ID</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="CountryID"
                  placeholder=""
                  value={values.CountryID}
                  isInvalid={Boolean(touched.CountryID && errors.CountryID)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <br></br>
          <div className="text-end mt-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              Activate Account
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AccountActivationForm;
