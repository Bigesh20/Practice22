import { useState } from "react";
import {GooglesignInPopUp, signInEmailPassword} from "../../utils/firebaseUtils/firebase-utils.component";
import InputForm from "../inputForm/input-form.component";
import '../signUp/signup.styles.scss'
import Button from "../button/button.component";


const defaultSignInFields = {
    email: '',
    password: '', 
};

const SignIn = () => {
    const [signInFields, setSignInFields] = useState(defaultSignInFields);
    const {email, password} = signInFields;
    console.log(signInFields);
    const resetFormFields = () => {
       setSignInFields(defaultSignInFields);
    }
    const handleSubmitButton = async (event) => {
       event.preventDefault();
      
       try{ 
        await signInEmailPassword(email, password);
        
        resetFormFields();
       }
       catch (error) {
        switch(error.code){
            case 'auth/user-not-found':
            alert('no user with this email');
            break;  
            case 'auth/wrong-password':
            alert('wrong password');
            break;
            default:
                console.log(error);
        }
        console.log('error found', error)
       };
    }
    const logInPopUp = async() => {
        await GooglesignInPopUp();
        
        
        }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setSignInFields({...signInFields, [name]: value})
    };
    return(

        <div className="sign-up-container">
        <h2>Already Have an Account</h2>
        <span>LogIn With Email And Password</span>
        <form onSubmit={handleSubmitButton} >

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

       <div className="buttons-container">
       

       <Button type="submit"> Sign In</Button>
       <Button type="button" buttonType='google' onClick={logInPopUp} > Google SignIn</Button>
       
       </div>

        </form>
        </div>
    )
};

export default SignIn;