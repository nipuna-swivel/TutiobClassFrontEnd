import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
	headers: {
		"Content-Type": "application/json",
	},
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		// Get the token from localStorage
		const accessToken = localStorage.getItem("accessToken");

		if (accessToken) {
			// Add the token to the Authorization header
			config.headers["Authorization"] = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Export the Axios instance with interceptors  this is  
export { axiosInstance as axios };
