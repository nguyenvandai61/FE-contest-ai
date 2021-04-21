import { readCookie } from 'utils/cookie';

const axios = require('axios');

const headers = {
    'Content-Type': 'application/json',
};
const BASE_URL = 'http://127.0.0.1:8000';

const CLOUD_NAME = 'dj5xafymg';
const APIPost = async (url: string, data?: string) => {
    const token = readCookie('access_token');
    console.log(token);
    return await axios({
        method: 'POST',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        data: data
    });
};
const APIGet = (url: string) => {
    const token = readCookie('access_token');
    return axios({
        method: 'GET',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
    });
};

const APIDelete = (url: string, data?: string) => {
    const token = readCookie('access_token');
    console.log(token);
    return axios({
        method: 'DELETE',
        url: `${BASE_URL}/${url}`,
        headers: token ? {...headers, 'Authorization' : `Bearer ${token}`} : headers,
        data: data
    });
};
const APIPut = (url: string, data: string) => {
    const token = readCookie('access_token');
    return axios({
        method: 'PUT',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        data: data
    });
};
const IMAGEPost = (data: any) => {
    return axios({
        method: 'POST',
        url: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        data: data,
        header: {
            'Content-Type': 'multipart/form-data',
            'Accept': '*/*',
        },
    });
};
export const DataAccess = {
    Get: APIGet,
    Post: APIPost,
    Delete: APIDelete,
    Put: APIPut,
    IMAGEPost,
};
