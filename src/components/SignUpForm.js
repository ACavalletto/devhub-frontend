import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => { 
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field}{...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ): null}
        </>
    )
}

const SignupForm = () => {
    return (
        <>
            <h1>Sign Up</h1>
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
            
            <Form>
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
        </>
    )
}

const SignUpForm = (props) => {
    return (<SignupForm />)
}

export default SignUpForm