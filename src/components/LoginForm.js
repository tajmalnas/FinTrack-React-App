import {googleProvider,auth} from '../firebase-config/FirebaseConfig'
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie';
import '../components/LoginForm.css';

const cookies = new Cookies();
const LoginForm = (props) => {

    const {setIsAuth} = props;

    const signIn = async () =>{
        try{
            const result = await signInWithPopup(auth,googleProvider);
            cookies.set('auth-token',result.user.refreshToken);
            setIsAuth(true);
        }catch(err){
            console.error(err)
        }
    } 

  return (
    <div className='auth'>
    <div className='maincontainer' >
        <div className='mainlogintext'>sign in to Keep Track of Your Expenses</div>
        <button className='mainloginbut' onClick={signIn}>Sign In With Google</button>
    </div>
    </div>
  )
}

export default LoginForm;