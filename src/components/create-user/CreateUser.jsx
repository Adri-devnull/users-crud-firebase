import { addDoc } from 'firebase/firestore';
import { usersCollectionReference } from '../../config/firebase.config';

const CreateUser = () => {
	return <button onClick={createUser}>Create User</button>;
};

const createUser = async () => {
	const newUser = {
		name: 'adrian',
		email: 'adrianete@gmail.com',
		active: true
	};

	try {
		await addDoc(usersCollectionReference, { ...newUser });
	} catch (error) {
		console.error(error);
	}
};

export default CreateUser;
