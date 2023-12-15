import axios, { RawAxiosRequestConfig } from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_ROOT_API_URL,
	timeout: 6000,
	validateStatus: (status) => status >= 200 && status < 300,
});

// Uncomment this to enable interceptor
// api.interceptors.response.use(
// 	(response) => {
// 		if (response.status === 401) {
// 			// Handle unauthorized response
// 			// Remove token and force user to login
// 		}
// 		return response;
// 	},
// 	(error) => {
// 		return error;
// 	},
// );

const apiRequest = async <T>(config: RawAxiosRequestConfig, withToken = false) => {
	try {
		// * Current implementation only handles client side request with authorization
		// * Need to access server cookies if we want to fetch data using SSR with authorization
		const token = "jwt.afd123743812";
		if (withToken) {
			config.headers = {
				Authorization: `Bearer ${token}`,
			};
		}
		const response = await api.request<T>(config);
		return response;
	} catch (err: any) {
		throw new Error(err.message);
	}
};

export default apiRequest;
