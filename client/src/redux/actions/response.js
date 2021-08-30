import axios, { setAuthToken } from './axiosService';

export const Createresponse = data => async dispatch => {
    try {
        dispatch({ type: 'POST_RESPONSE' });
        const response = await axios.post(`/api/response`, data);
        let payload = [];
        payload = response.data;
        return payload;
    } catch (error) {
        dispatch({ type: 'POST_RESPONSE_FAIL', error });
        throw error;
    }

};
export const getresponse = (id) => async dispatch => {

    try {

        await setAuthToken(axios)

        const response = await axios.get(`/api/responses/category/${id}`)

        const payload = response.data.respons;

        dispatch({ type: 'GET_RESPONSES_SUCCESSFUL', payload });
        return response

    } catch (error) {
        console.log(error)
        // const payload = error.response.data.message
        dispatch({ type: 'GET_CATEGORY_QUESTIONS_FAIL' });
        throw error;
    }

};

export const getresponseDetail = (id) => async dispatch => {

    try {

        await setAuthToken(axios)

        const response = await axios.get(`/api/responses/${id}/count`)
        const payload = response
        console.log(payload)
        return payload

    } catch (error) {
        console.log(error)
        // const payload = error.response.data.message
        dispatch({ type: 'GET_CATEGORY_QUESTIONS_FAIL' });
        throw error;
    }

};
