import Axios from 'axios';
import { base } from './baseUrl'

export const register = (data1) => async (dispatch) => {

    const { email, password } = data1
    dispatch({ type: "USER_REGISTER_REQUEST", payload: { email, password } });
    try {
        const { data } = await Axios.post(`${base}api/register`, data1);
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
        dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('token', JSON.stringify(data.token));
    } catch (error) {
        console.log(error.response)
        var obj = error.response.data;
        if (obj) {
            const j = obj[Object.keys(obj)[0]]
            throw j
        }
        console.log(error.response.data.message)
        throw error.response.data.message

    }
};
export const login = (email, password) => async (dispatch) => {
    dispatch({ type: "USER_SIGNIN_REQUEST", payload: { email, password } });
    try {
        const { data } = await Axios.post(`${base}api/signin`, { email, password });
        dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
        localStorage.setItem('token', `${data.token}`);
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        var obj = error.response.data;
        const j = error.response && error.response.data.message
            ? error.response.data.message
            : obj[Object.keys(obj)[0]]
        // console.log(j)
        throw j
    }

};
export const detailsUser = (userId) => async (dispatch, getState) => {
    dispatch({ type: "USER_DETAILS_REQUEST", payload: userId });
    try {
        const { data } = await Axios.get(`${base}api/user/${userId}`);
        dispatch({ type: "USER_DETAILS_SUCCESS", payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: "USER_DETAILS_FAIL", payload: message });
    }
};
export const signout = () => async (dispatch) => {
    try {
        await dispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');

    } catch (error) {
        alert(error)
    }

};

// export const updateUserProfile = (user) => async (dispatch, getState) => {
//     dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
//     const {
//         userSignin: { userInfo },
//     } = getState();
//     try {
//         const { data } = await Axios.put(`${base}api/user/profile`, user, {
//             headers: { Authorization: `Bearer ${userInfo.token}` },
//         });
//         dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
//         dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
//         localStorage.setItem('userInfo', JSON.stringify(data));
//     } catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message;
//         dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
//     }
// };