import { FETCH_LOGIN_USER } from "../actions/loginAction";

const initalState = {
    user: []
};

export default (state = initalState, action) => {
    if (action.type === FETCH_LOGIN_USER) {
        return {
            ...state,
            user: action['payload']
        }
    } else {
        return state;
    }
}