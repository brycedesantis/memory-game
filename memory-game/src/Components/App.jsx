import { useEffect, useState } from "react"
import "../styles/App.css"
// import Card from "./Card"
import Nav from "./Nav"
import Card from "./Card"

function App() {
	const [pokemon, setPokemon] = useState([])

	const possiblePokemon = 493

	async function getRandomPoke(amount) {
		const availablePoke = []
		let attempts = 0
		while (availablePoke.length < amount && attempts < 100) {
			const randomId = Math.floor(Math.random() * possiblePokemon)

			const duplicateID = availablePoke.find(({ id }) => id === randomId)
			if (duplicateID) {
				attempts++
			} else {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${randomId}`
				)
				const { name, sprites } = await response.json()
				const imageSrc = sprites.front_default
				availablePoke.push({ id: randomId, name: name, imageSrc: imageSrc })
			}
		}
		setPokemon([...availablePoke])
	}

	useEffect(() => {
		getRandomPoke(5)
	}, [])

	const pokeElements = pokemon.map((entry) => {
		return <Card key={entry.id} name={entry.name} imageSrc={entry.imageSrc} />
	})

	return (
		<>
			<Nav />
			<main>
				<div className="container">{pokeElements}</div>
			</main>
		</>
	)
}

export default App
