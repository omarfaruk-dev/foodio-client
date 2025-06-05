import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;