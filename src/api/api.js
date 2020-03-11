import * as axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "061e6565-ddf3-40e0-b7ce-8c2b5f934a93"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollowUser(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    followUser(id) {
        return axiosInstance.post(`follow/${id}`)
            .then(response => response.data);
    },
    getProfile(id) {
        return axiosInstance.get(`profile/${id}`)
        .then(response => response);
    }
}

export const authAPI = {
    getMe() {
        return axiosInstance.get(`auth/me`)
            .then(response => response.data)
    },
}
