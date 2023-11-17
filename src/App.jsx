import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import { useState } from 'react'
import './App.css'

const App = () => {
	const [token, setToken] = useState(null);

	return (
		<>
			<section>
				<SignUpForm setToken={setToken} />
			</section>
			<section>
				<Authenticate token={token} />
			</section>
		</>

	)
}

export default App
