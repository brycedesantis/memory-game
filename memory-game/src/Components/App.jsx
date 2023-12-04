import { useEffect, useState } from "react"
import "../styles/App.css"
import Nav from "./Nav"
import Card from "./Card"
import { v4 as uuidv4 } from "uuid"

function App() {
	const [pokemon, setPokemon] = useState([])
	const [flipped, setFlipped] = useState(false)
	const [count, setCount] = useState(0)
	const [highScore, setHighScore] = useState(0)

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

	function increaseScore() {
		const increase = count + 1
		setCount(increase)
		const newHigh = Math.max(increase, highScore)
		setHighScore(newHigh)
	}

	function shufflePokemon() {
		const availablePoke = [...pokemon]
		const shuffled = []

		while (availablePoke.length) {
			const pokeIndex = Math.floor(Math.random() * availablePoke.length)
			const card = availablePoke[pokeIndex]
			card.id = uuidv4()
			shuffled.push(card)
			availablePoke.splice(pokeIndex, 1)
		}
		setPokemon(shuffled)
	}

	function clickedCards(index) {
		const clickable = [...pokemon]
		clickable[index].isClicked = true
		setPokemon(clickable)
	}

	function flipCard(index) {
		setFlipped(true)

		const card = pokemon[index]
		if (card.isClicked) {
			alert("already clicked")
		}

		clickedCards(index)
		increaseScore()

		const allClicked = pokemon.every((card) => card.isClicked)
		if (!allClicked) {
			setTimeout(() => {
				setFlipped(false)
				shufflePokemon()
			}, 500)
			return
		}
	}

	useEffect(() => {
		getRandomPoke(5)
	}, [])

	const pokeElements = pokemon.map((entry, index) => {
		return (
			<Card
				key={entry.id}
				name={entry.name}
				imageSrc={entry.imageSrc}
				flipCard={() => flipCard(index)}
				flipped={flipped}
			/>
		)
	})

	return (
		<>
			<Nav count={count} highScore={highScore} />
			<main>
				<div className="container">{pokeElements}</div>
			</main>
		</>
	)
}

export default App
