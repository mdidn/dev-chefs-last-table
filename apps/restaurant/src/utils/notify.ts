import { TypeOptions, toast } from "react-toastify";

const notify = (message: string, type?: TypeOptions) => {
	switch (type) {
		case "error":
			return toast.error(message);
		case "info":
			return toast.info(message);
		case "success":
			return toast.success(message);
		case "warning":
			return toast.warning(message);
		case "default":
			return toast(message);
		default:
			return toast(message);
	}
};

export default notify;
