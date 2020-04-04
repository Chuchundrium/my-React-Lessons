import React from "react";
import styles from "./formsControls.module.css";
import { Field } from 'redux-form';

const FormControl = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )    
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export const createField = (
    name, component, placeholder, validators, props={}, text = '') => (
    <div>
        <Field
            name={name}
            component={component}
            placeholder={placeholder}
            validate={validators}
            {...props}
        /> <label>{text}</label>
    </div>
)