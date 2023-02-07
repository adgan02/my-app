import axios from "axios";
import { useRef } from "react";
import { Api_version } from "../constant";

export async function InAppService(type, body, header, path) {
    axios.defaults.headers.put["Content-Type"] = "application/json";

    async function get(body, path) {
        axios.defaults.headers.get["Content-Type"] = "application/json";
        try {
            const response = await axios.get(`${Api_version.Url_Key}` + `${Api_version.Api_Key}` + path)
            if (response.status === 200) {
                const data = response.data;
                return data;
            } else {
                throw new Error("Failed to invite user");
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function put(body, path) {
        // setToken
        axios.defaults.headers.put["Content-Type"] = "application/json";
        try {
            const response = await axios.put(`${Api_version.Url_Key}` + `${Api_version.Api_Key}` + path, body)
            if (response.status === 200) {
                const data = response.data;
                return data;
            } else {
                throw new Error("Failed to invite user");
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function post(body, path) {
        axios.defaults.headers.post["Content-Type"] = "application/json";

        try {
            const response = await axios.post(`${Api_version.Url_Key}` + `${Api_version.Api_Key}` + path, body)
            if (response.status === 200) {
                const data = response.data;
                return data;
            } else {
                throw new Error("Failed to invite user");
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function del(body, path) {
        axios.defaults.headers.delete["Content-Type"] = "application/json";
        try {
            const response = await axios.del(`${Api_version.Url_Key}` + `${Api_version.Api_Key}` + path, body)
            if (response.status === 200) {
                const data = response.data;
                return data;
            } else {
                throw new Error("Failed to invite user");
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function putWithHeader(body, header, path) {
        // setToken
        axios.defaults.headers.put["Content-Type"] = "application/json";
        axios.defaults.headers.put["AUTHORIZATION"] = "Bearer " + header.auth;
        axios.defaults.headers.put["AUTH-USER-TOKEN"] = header.token;
        try {
            const response = await axios.put(`${Api_version.Url_Key}` + `${Api_version.Api_Key}` + path, body)
            if (response.status === 200) {
                const data = response.data;
                return data;
            } else {
                throw new Error("Failed to invite user");
            }
        } catch (error) {
            console.log(error);
        }
    }
    switch (type) {
        case 1: return await get(body, path);
        case 2: return await put(body, path);
        case 3: return await post(body, path);
        case 4: return await del(body, path);
        case 5: return await putWithHeader(body, header, path);
    }
}