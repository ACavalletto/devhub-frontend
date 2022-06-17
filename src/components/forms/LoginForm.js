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

const LoginFormik = () => {
    return (
        <>
            <h1>Login</h1>
            <h4>Please enter your details below</h4>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('No Password Provided')
                        .min(8, 'Password must be at least 8 characters long'),
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
                <button type='submit'>Login</button> {/* onClick(firebaseSignUp)*/}    
            </Form>    
        </Formik>
        </>
    )
}

const LoginForm = () => {
    return (<LoginFormik />)
}

export default LoginForm
