import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { usersCollectionReference } from '../../config/firebase.config';

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const subscribeToData = onSnapshot(usersCollectionReference, snapshot => {
			getAllUsers(snapshot, setUsers);
		});

		return () => subscribeToData();
	}, []);

	if (users.length === 0) return <h2>Loading users...</h2>;

	return (
		<>
			<h2>Users</h2>
			{users.map(user => (
				<div key={user.id}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>{user.active ? 'active' : 'inactive'}</p>
				</div>
			))}
		</>
	);
};

const getAllUsers = async (snapshot, setUsers) => {
	const { docs } = snapshot;
	const users = docs.map(doc => ({ id: doc.id, ...doc.data() }));
	setUsers(users);
};

export default Users;
