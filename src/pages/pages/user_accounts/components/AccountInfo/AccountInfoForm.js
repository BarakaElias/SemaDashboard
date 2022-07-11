import React, { useContext } from "react";
import {
  Card,
  Row,
  Form,
  Alert,
  Container,
  Col,
  Button,
  Flex,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import NotyfContext from "../../../../../contexts/NotyfContext";

const AccountInfoForm = () => {
  const notyf = useContext(NotyfContext);
  const { user } = useAuth();
  const get_csrf = async () => {
    axios.defaults.withCredentials = true;
    const csrf = await axios
      .get("http://localhost/semaapi/public/sanctum/csrf-cookie")
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  const uploadFiles = (fileToUpload) => {
    console.log("fileupload", fileToUpload);
    const fd = new FormData();
    fd.append("fileToUpload", fileToUpload);
    try {
      axios
        .get("http://localhost/semaapi/public/sanctum/csrf-cookie")
        .then((res) => {
          axios
            .post("upload_file", fd, {
              onUploadProgress: (ProgressEvent) => {
                console.log(
                  "Upload progress " +
                    Math.round(
                      (ProgressEvent.loaded / ProgressEvent.total) * 100
                    ) +
                    "%"
                );
              },
            })
            .then((res) => {
              console.log("axios file upload", res);
              return res;
            })
            .catch((err) => {
              console.log("axios file upload err", err);
              return err;
            });
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Card>
      <Card.Header tag="h5">
        <strong> Account Information </strong> <br></br>
      </Card.Header>
      <Card.Body className="m-sm-4">
        <Row>
          <Formik
            initialValues={{
              company_name: "baraka@aimfirms.com",
              company_email: "baraka@aimfirms.com",
              support_email: "baraka@aimfirms.com",
              billing_email: "baraka@aimfirms.com",
              phone_number: "255624327900",
              incorporation_certificate: {},
              business_license: {},
              tin_vrn_certificate: {},
              directors_nida: {},
            }}
            enableReinitialize={true}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              console.log("Company info form: ", values);
              try {
                const response = await axios.post("activate_account", {
                  email: user.email,
                  company_name: values.company_name,
                  company_email: values.company_email,
                  billing_email: values.billing_email,
                  support_email: values.support_email,
                  phone_number: values.phone_number,
                  incorporation_certificate: values.incorporation_certificate,
                  business_license: values.business_license,
                  tin_vrn_certificate: values.tin_vrn_certificate,
                  directors_nida: values.directors_nida,
                });
                console.log("Account Activation", response);
                if (response.status === 200) {
                  if (response.data === "Account Activated") {
                    notyf.success("Account Activation Request Sent!");
                  } else if (response.data.email) {
                    notyf.error("Cannot request another Activation");
                  }
                }
              } catch (e) {
                console.log("Account Activation", e);
                notyf.success("Failed to Send Request! Try Again Later.");
              }

              // const files = [];
              // let file = {
              //   file_name: "incorporation_certificate_",
              //   file_path: values.incorporation_certificate,
              // };
              // const uploadedFiles = await uploadFiles(values);
              // console.log("Upload files request: ", uploadedFiles);
            }}
            validationSchema={Yup.object().shape({
              company_name: Yup.string().required("Required"),
              company_email: Yup.string()
                .email("Must be a valid email")
                .required("Required"),
              support_email: Yup.string().email("Must be a valid email"),
              billing_email: Yup.string().email("Must be a valid email"),
              phone_number: Yup.string(),
            })}
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
                    {errors.submit}
                  </Alert>
                )}
                <div className="d-flex justify-content-center">
                  <div className="w-50">
                    <Form.Group className="mb-3">
                      <Form.Label>Company name</Form.Label>
                      <Form.Control
                        type="text"
                        name="company_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={Boolean(
                          touched.company_name && errors.company_name
                        )}
                      />
                      {!!touched.company_name && (
                        <Form.Control.Feedback type="invalid">
                          {errors.company_name}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Company email</Form.Label>
                      <Form.Control
                        type="email"
                        name="company_email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={Boolean(
                          touched.company_email && errors.company_email
                        )}
                      />
                      {!!touched.company_email && (
                        <Form.Control.Feedback type="invalid">
                          {errors.company_email}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Support email</Form.Label>
                      <Form.Control
                        type="email"
                        name="support_email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={Boolean(
                          touched.support_email && errors.support_email
                        )}
                      />
                      {!!touched.support_email && (
                        <Form.Control.Feedback type="invalid">
                          {errors.support_email}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Billing email</Form.Label>
                      <Form.Control
                        type="email"
                        name="billing_email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={Boolean(
                          touched.billing_email && errors.billing_email
                        )}
                      />
                      {!!touched.billing_email && (
                        <Form.Control.Feedback type="invalid">
                          {errors.billing_email}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone_number"
                        onChange={handleChange}
                        placeholder="Eg: 255624327900"
                        onBlur={handleBlur}
                        isInvalid={Boolean(
                          touched.phone_number && errors.phone_number
                        )}
                      />
                      {!!touched.phone_number && (
                        <Form.Control.Feedback type="invalid">
                          {errors.phone_number}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <br></br>
                    <br></br>

                    {/* <h3>Documents</h3> */}
                    <Form.Group className="mb-3">
                      <Form.Label>Certificate of Incorporation</Form.Label>
                      <Form.Control
                        name="incorporation_certificate"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          const uploadedFiles = uploadFiles(file);

                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        type="file"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Business License</Form.Label>
                      <Form.Control
                        name="business_license"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="file"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>TIN/VRN Certificate</Form.Label>
                      <Form.Control
                        name="tin_vrn_certificate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="file"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Director's NIDA</Form.Label>
                      <Form.Control
                        name="directors_nida"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="file"
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                      <div>
                        <Button
                          className="mt-4"
                          type="submit"
                          variant="primary"
                          size="lg"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AccountInfoForm;
