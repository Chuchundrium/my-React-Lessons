import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'; /* instead of just Input */
import { Input } from './../common/FormsControls/formsControls'
import { required } from './../../utils/validators'
import { connect } from 'react-redux';
import { login } from "./../../redux/reducers/auth-reducer"
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/formsControls.module.css'

const LoginForm = (props) => {
    return (
        /**handleSubmit:
         * e.preventDefault
         * gets all form data and put them to object
         * -> calls props.onSubmit(formData)
         */
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    component={Input}
                    placeholder={'email'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name='password'
                    type='password'
                    component={Input}
                    placeholder={'password'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name='rememberMe'
                    component={Input}
                    type={'checkbox'}
                />
                <label> remember me </label>
            </div>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
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

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);

    };
    if (props.isAuth) {
        console.log('props.isAuth: ', props.isAuth);
        return <Redirect to="/profile" />
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
// export default Login;

/** ^^ replaced to container component:
 * (connact creates callbacks-wrappers;
 * callback dispatches thunk-creator)
 */

export default connect(mapStateToProps, { login })(Login);