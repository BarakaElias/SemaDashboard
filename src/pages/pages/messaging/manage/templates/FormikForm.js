const Yup = require("yup");
export const initialValues = {
  templateName: "",
  variables: "",
  template_text: "",
};

export const validationSchema = Yup.object().shape({
  templateName: Yup.string().required("A name for your template is required!"),
  template_text: Yup.string().required(
    "The message of the template is required"
  ),
});
