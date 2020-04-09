import { getAuthUserData } from './auth-reducer';

const INITIALIZED = 'network/app/INITIALIZED';

/** 99. 
 * globalError could be dispatched for show if some error occured */
let initialState = {
    ifInitialized: false,
    globalError: null
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