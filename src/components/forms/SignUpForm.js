import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup'
import style from '../../style/signup.module.css'

const MyTextInput = ({ label, ...props }) => { 
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={style.text_input} {...field}{...props} />
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ): null}
        </>
    )
}

const SignupForm = () => {
    return (
        <div className={style.form_container}>
            <h1 className={style.signup_h1}>Sign Up</h1>
            <h4>Please enter your details below</h4>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordValidation: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('No Password Provided')
                        .min(8, 'Password must be at least 8 characters long'),
                    passwordValidation: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
            
            <Form className={style.signup_form}>
                <MyTextInput
                    label='Email'
                    name='email'
                    type='text'
                    placeholder='Enter your email'
                />
                <MyTextInput
                    label="Password"
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                />
                <MyTextInput
                    label="Password Validation"
                    name='passwordValidation'
                    type='password'
                    placeholder='Confirm password'
                />
                <button type='submit'>Sign Up</button> {/* onClick(firebaseSignUp)*/}    
            </Form>    
        </Formik>
        </div>
    )
}

const SignUpForm = () => {
    return (<SignupForm />)
}

export default SignUpForm
