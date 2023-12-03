"use client";
import React, { useState } from 'react';
import { trpc } from '../../trpc';

export interface LoginInterface{}

const Login: React.FC<LoginInterface>  = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const {data, error, mutate} = trpc.login.useMutation()

	const submitHandle = () => {
		mutate({email, password})
	}

	return (
		<div>
			{JSON.stringify(data)}
 			<form>
				<label htmlFor="email">Email:</label>
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				<label htmlFor="email">Password:</label>
				<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

				<button type="button" onClick={submitHandle}>Submit</button>
			</form>
 		</div>
	);
};

export default Login;
