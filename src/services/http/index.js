import axios from "axios";

const http = axios.create({
    baseURL: "https://api.themoviedb.org",
});

export default http;
