import axios from "axios";
const accessToken = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer " + accessToken,
	},
});

export { axiosInstance as axios };
