import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'; /* instead of just Input */

const LoginForm = (props) => {
    return (
        /**handleSubmit:
         * e.preventDefault
         * gets all form data and put them to object
         * calls props.onSubmit(formData)
         */
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='login'
                    component={'input'}
                    placeholder={'login'}
                />
            </div>
            <div>
                <Field
                    name='password'
                    component={'input'}
                    placeholder={'password'}
                />
            </div>
            <div>
                <Field
                    name='rememberMe'
                    component={'input'}
                    type={'checkbox'}
                />
                <label> remember me </label>
            </div>
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
        console.log(formData);
    };
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;