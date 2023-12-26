import { useState } from "react";
import { createUserDocument, createUserWithEmailPassword } from "../../utils/firebaseUtils/firebase-utils.component";
import InputForm from "../inputForm/input-form.component";
import './signup.styles.scss'
import Button from "../button/button.component";

const defaultSignUpFields = {
    displayName: '',
    email: '',
    password: '', 
    confirmPassword: ''
};

const SignUp = () => {
    const [signUpFields, setSignUpFields] = useState(defaultSignUpFields);
    const {displayName, email, password, confirmPassword} = signUpFields;
    console.log(signUpFields);
    const resetFormFields = () => {
       setSignUpFields(defaultSignUpFields);
    }
    const handleSubmit = async (event) => {
       event.preventDefault();
       if (password !== confirmPassword)
       {
        alert('password does not match');
        return;
       }
       try{ 
        const {user} = await createUserWithEmailPassword(email, password);
        await createUserDocument(user, {displayName});
        resetFormFields();
       }
       catch (error) {
        console.log('error in your code', error)
       };
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setSignUpFields({...signUpFields, [name]: value})
    };
    return(

        <div className="sign-up-container">
        <h2>Don't Have an Account</h2>
        <span>LogIn With Email And Password</span>
        <form onSubmit={handleSubmit} >
        
       <InputForm 
       label='Display Name'
       required
       type="text" 
       onChange={handleChange} 
       name="displayName" 
       value={displayName}

       />

       <InputForm 
       label='Email'
       required
       type="email" 
       onChange={handleChange} 
       name="email" 
       value={email}

       />

       <InputForm 
       label='Password'
       required
       type="password" 
       onChange={handleChange} 
       name="password" 
       value={password}

       />

       <InputForm 
       label='Confirm Password'
       required
       type="password" 
       onChange={handleChange} 
       name="confirmPassword" 
       value={confirmPassword}

       />

        <Button type="submit"> Sign Up</Button>
        </form>
        </div>
    )
};

export default SignUp;

