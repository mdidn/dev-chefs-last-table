import apiRequest from "@api/index";
import { IApiResponse } from "src/types/generals.type";

const getProfile = <T,>() => {
	return apiRequest<IApiResponse<T>>({
		url: "/profile",
		method: "GET",
	});
};

export default getProfile;
