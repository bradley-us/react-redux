export const API_CALL_REQUEST = 'API_CALL_REQUEST'; // Watcher Saga listens
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; // Dispatched by Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; // Dispatched by Worker Saga

export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email,
                password
            },
            okAction: API_CALL_SUCCESS,
            failureAction: API_CALL_FAILURE
        }
    }
}

/**
 * HttpRequest Action Dispatcher
 * @param {*} method 
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method: method,
            url: url,
            data: data,
            okAction: API_CALL_SUCCESS,
            failureAction: API_CALL_FAILURE
        }
    }
}