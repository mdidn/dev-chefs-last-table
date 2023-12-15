// For AxiosResponse generic type
// Used for our api response structure
export interface IApiResponse<T> {
	data: T;
	meta?: {
		totalPage: number;
		currentPage: number;
	};
	message?: string;
	status: number;
}
