let Yup = require("yup");
export const createSenderIdInitialFormValues = {
  country: "",
  sender_name: "",
  isActive: false,
  registered_networks: [
    { vendor: "Halotel" },
    { vendor: "Vodacom" },
    { vendor: "Airtel" },
    { vendor: "Zantel" },
  ],
};

export const formValuesValidation = Yup.object().shape({
  sender_id_country: Yup.string().required("Country required"),
  sender_name: Yup.string().required("Sender name is required"),
});
