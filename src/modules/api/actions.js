import {BEERS} from "./endpoints";
import api from "./api";

export const API_ACTIONS = {
    FETCH_START: 'FETCH_START_',
    FETCH_SUCCESS : 'FETCH_SUCCESS_',
    FETCH_FAILURE : 'FETCH_FAILURE_'
}
export const apiActions = {
    fetch : ( endpoint, payload) => ({
        type : `${API_ACTIONS.FETCH_START}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchSuccess : ( endpoint, payload) => ({
        type : `${API_ACTIONS.FETCH_SUCCESS}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchFailure : ( endpoint, payload) => ({
        type : `${API_ACTIONS.FETCH_FAILURE}${endpoint.toUpperCase()}`,
        payload
    }),
}

export function fetchAll() {
    return async dispatch => {
        try {
            dispatch(apiActions.fetch(BEERS));
            const data = await  api.fetch(BEERS);

            dispatch(apiActions.fetchSuccess(BEERS, data));


        } catch (e) {
            dispatch(apiActions.fetchFailure(BEERS, e));

        }

    }
}