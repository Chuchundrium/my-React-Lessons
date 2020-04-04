import { getAuthUserData } from './auth-reducer';

const INITIALIZED = 'network/app/INITIALIZED';

let initialState = {
    ifInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                ifInitialized: true
            }
        default: return state;
    }
};

export const initSuccess = () => ({ type: INITIALIZED });

export const appInitialization = () => (dispatch) => {
    /** several async independent dispatches: 
    * dispatch(smthElse());
    * dispatch(smthElse());
    * dispatch(smthElse());
    * >> last dispatch should wait all previous dispatches >> use promise array!!! */
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initSuccess());
        });
};

export default appReducer;