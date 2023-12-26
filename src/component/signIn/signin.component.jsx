
import SignUp from '../signUp/signup.component'
import { GooglesignInPopUp, createUserDocument } from "../../utils/firebaseUtils/firebase-utils.component";

const SignIn = () => {

const logInPopUp = async() => {
    const {user } = await GooglesignInPopUp();
    await createUserDocument(user);
}

return(

    <div className="sign-in">
    <button onClick={logInPopUp}>
    SignIn with Google Pop Up
    </button>
    <SignUp />
    </div>
)

}

export default SignIn;