import axios from "axios";

export const customAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const useAxios = () => {
    return customAxios;
};

export default useAxios;