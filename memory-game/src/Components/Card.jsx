import pokeLogo from "../assets/pokemon-23.svg"

function Card({ name, imageSrc, flipCard, flipped }) {
	const pokemonLogo = pokeLogo

	return (
		<>
			<div className="card" onClick={flipCard}>
				{!flipped ? (
					<>
						<img src={imageSrc} alt={name} />
						<h3>{name}</h3>
					</>
				) : (
					<>
						<img className="logo" src={pokeLogo} alt="Pokemon Logo"></img>
					</>
				)}
			</div>
		</>
	)
}

export default Card
