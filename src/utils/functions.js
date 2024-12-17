import { toast } from "react-toastify";

export const pushToast = (
    tType = "INFO",
    tMessage = "Default Toast Message",
    tDuration = 5000,
    clear = false
  ) => {
    let toastFunction;
    const toastOptions = {
      autoClose: tDuration,
    };
    switch (tType) {
      case "SUCCESS":
        toastFunction = toast.success;
        break;
      case "ERROR":
        toastFunction = toast.error;
        break;
      case "WARNING":
        toastFunction = toast.warning;
        break;
      case "LOADING":
        toastFunction = toast.loading;
        break;
      case "INFO":
      default:
        toastFunction = toast.info;
        break;
    }
    if (clear) toast.dismiss();
  
    // Show the new toast and store its ID
    toastFunction(tMessage, toastOptions);
  };