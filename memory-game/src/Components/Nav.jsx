import { useState } from "react"

function Nav({ count, highScore }) {
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
