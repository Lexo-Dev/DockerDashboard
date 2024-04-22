import axios from "axios";

let backendEndpoint = "";

if (process.env.NODE_ENV === "development") {
    backendEndpoint = "http://localhost:3230/api";
} else {
    const ssl = process.env.REACT_APP_BACKEND_SSL === "true";
    const host = process.env.REACT_APP_BACKEND_HOST;
    const port = Number(process.env.REACT_APP_BACKEND_PORT);
    backendEndpoint = `${ssl ? "https" : "http"}://${host}:${port}/api`;
}

console.log(backendEndpoint);

export const request = (method, path, data = {}) => {
    const options = {
        method,
        data,
        url: backendEndpoint + "/" + path,
        timeout: 50000,
    };
    return axios(options);
};
