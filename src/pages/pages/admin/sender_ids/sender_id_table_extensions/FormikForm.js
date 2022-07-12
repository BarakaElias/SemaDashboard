let Yup = require("yup");

export const formValuesValidation = Yup.object().shape({
  sender_id_country: Yup.string().required("Country required"),
  sender_name: Yup.string().required("Sender name is required"),
});
