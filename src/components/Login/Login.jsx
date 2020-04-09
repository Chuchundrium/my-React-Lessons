import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from './../common/FormsControls/formsControls'
import { required } from './../../utils/validators'
import { connect } from 'react-redux';
import { login } from "./../../redux/reducers/auth-reducer"
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/formsControls.module.css'

/** (props) => { ... props.handleSubmit ... props.error ...}
 *    ^^^ replaced by
 * ({handleSubmit, error}) => { ... handleSubmit ... error ...}
 * -> we can take only what we need from props (with structurization)
 */
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        /**handleSubmit:
         * e.preventDefault
         * gets all form data and put them to object
         * -> calls props.onSubmit(formData)
         */
        <form onSubmit={handleSubmit}>
            {createField('email', Input, 'email', [required])}
            {createField('password', Input, 'password', [required], {type: 'password'})}
            {createField('rememberMe', Input, null, [], {type: 'checkbox'}, 'remember me')}
            {captchaUrl && 
                <div>
                    <img src={captchaUrl} alt='captha' />
                    {createField('captcha', Input, '', [required])}
                </div>

                }
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

/* function reduxForm returns HOC
** -> we will wrape form */

const LoginReduxForm = reduxForm({
    /* form's unique name: */
    form: 'loginForm'
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);

    };
    if (isAuth) {
        return <Redirect to="/profile" />
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});
// export default Login;

/** ^^ replaced to container component:
 * (connact creates callbacks-wrappers;
 * callback dispatches thunk-creator)
 */

export default connect(mapStateToProps, { login })(Login);