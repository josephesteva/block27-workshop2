import { useState } from "react";

const SignUpForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password,
					})
				});
			const result = await response.json();
			console.log(result)

		} catch (error) {
			setError(error.message)
			console.log(`An error occured`)
		}
	} 

	return (
		<>
			<h2>Sign Up</h2>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<label>
					Username: <input type="text" value={username} onChange={(event) => {
						setUsername(event.target.value)
					}} />
				</label>
				<label >
					Password: <input type="text" value={password} onChange={(event) => {
						setPassword(event.target.value)
					}} />
				</label>
				<button>Submit</button>
				{/* <h3>{username}</h3> */}
			</form>
		</>
	)
}

export default SignUpForm;