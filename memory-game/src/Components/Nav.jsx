import { useState } from "react"

function Nav() {
	const [count, setCount] = useState(0)
	const [highScore, setHighScore] = useState(0)

	return (
		<>
			<header>
				<nav>
					<h1>Memory Game</h1>
					<div>
						<h2>Current score: {count}</h2>
						<h2>High score: {highScore}</h2>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Nav
