function Card({ name, imageSrc }) {
	return (
		<>
			<div className="card">
				<img src={imageSrc} alt="" />
				<h3>{name}</h3>
			</div>
		</>
	)
}

export default Card
