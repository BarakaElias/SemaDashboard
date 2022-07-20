let Yup = require("yup");

export const formValuesValidation = Yup.object().shape({
  first_name: Yup.string().required("First name required"),
  last_name: Yup.string().required("Last name required"),
  email: Yup.string()
    .email("Must be valid email")
    .required("Email is Required"),
  username: Yup.string().required("Username is Required"),
  role: Yup.string().required("Must provide a role"),
});
