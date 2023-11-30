import "../styles/App.css"
import Card from "./Card"
import Nav from "./Nav"

function App() {
	return (
		<>
			<Nav />
			<main>
				<div className="container">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</main>
		</>
	)
}

export default App
