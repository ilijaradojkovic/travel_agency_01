import {toast} from "react-toastify";

export const notifySuccessToastWithMessage = (message) => toast.success(message);

export const nofifyErrorToastWithMessage = (message) => toast.error(message);