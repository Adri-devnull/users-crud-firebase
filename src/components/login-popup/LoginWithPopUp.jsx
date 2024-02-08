import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const googleProvider = new GoogleAuthProvider();

const LoginWithPopUp = () => {
	return (
		<>
			<h2>Social Login</h2>
			<button onClick={signInWithGoogle}>Login with Google</button>
		</>
	);
};

const signInWithGoogle = async () => {
	try {
		await signInWithPopup(auth, googleProvider);
	} catch (err) {
		console.log(err);
	}
};

export default LoginWithPopUp;
