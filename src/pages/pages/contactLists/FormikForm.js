let Yup = require("yup");
export const initialValues = {
  contactListName: "",
};

export const validationSchema = Yup.object().shape({
  contactListName: Yup.string().required("Give your contact list a name"),
});
