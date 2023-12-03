"use client";
import React, { useState } from 'react';
import { trpc } from '../../trpc';

export interface RegisterInterface {}

const Register: React.FC<RegisterInterface>  = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")
	const {data, error, mutate} = trpc.register.useMutation()

	const submitHandle = () => {
		mutate({email, password, name})
	}

	return (
		<div>
			{JSON.stringify(data)}
			{error && <div>{error.message}</div>}
 			<form>
			 <label htmlFor="name">Name:</label>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<label htmlFor="email">Email:</label>
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				<label htmlFor="email">Password:</label>
				<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

				<button type="button" onClick={submitHandle}>Submit</button>
			</form>
 		</div>
	);
};

export default Register;
