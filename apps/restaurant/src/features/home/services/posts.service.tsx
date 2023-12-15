// Isolated services

import { RawAxiosRequestConfig } from "axios";
import apiRequest from "src/api";

export const getPosts = async (config?: RawAxiosRequestConfig) => {
	return apiRequest<any>(
		{
			...config,
			url: "/posts",
			method: "GET",
		},
		true,
	);
};

export const getPost = async (postId: number, config?: RawAxiosRequestConfig) => {
	return apiRequest<any>(
		{
			...config,
			url: `/posts/${postId}`,
			method: "GET",
		},
		true,
	);
};
