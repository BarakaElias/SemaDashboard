import { useContext } from "react";
import axios from "axios";
import NotyfContext from "../../../contexts/NotyfContext";

export const GetDeliveryReport = (messageId) => {
  const notyf = useContext(NotyfContext);

  axios
    .get("https://api.sema.co.tz/api/GetDeliveryStatus", {
      params: {
        api_id: "API3462965997",
        api_password: "Licks@2021!",
        message_id: messageId,
      },
    })
    .then((response) => {
      const deliveryData = response.data;
      let notif_message = "";
      let notif_type = "";
      switch (deliveryData.DLRStatus) {
        case "Failed":
          notif_message =
            "[FAILED] The SMS to " +
            deliveryData.PhoneNumber +
            " at " +
            deliveryData.SentDateUTC +
            " was not delivered due to " +
            deliveryData.ErrorDescription;
          notif_type = "warning";
          break;
        case "Delivered":
          notif_message =
            "[SUCCESS] The SMS to " +
            deliveryData.PhoneNumber +
            " at " +
            deliveryData.SentDateUTC +
            " was delivered successfully whith client cost " +
            deliveryData.ClientCost;
          notif_type = "success";
          break;
        default:
          break;
      }
      notyf.open({
        type: notif_type,
        message: notif_message,
        duration: 10000,
        ripple: true,
        dismissible: true,
        position: { x: "center", y: "top" },
      });
    })
    .catch();
};

// export default GetDeliveryReport;
