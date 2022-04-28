let Yup = require("yup");
export const initialValues = {
  country: "",
  sender_id: "",
  remarks: "",
};

export const validationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  sender_id: Yup.string().required("Sender name is required"),
  remarks: Yup.string(),
});
