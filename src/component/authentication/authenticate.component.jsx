import SignUp from '../signUp/signup.component'
import SignIn from '../signIn/signin.component'
import './authenticate.styles.scss'

const Authenticate = () => {
 
    return(
     <div className='authenticate-container'>
     <SignIn />
     <SignUp />
     
     </div>
    )
};

export default Authenticate;

