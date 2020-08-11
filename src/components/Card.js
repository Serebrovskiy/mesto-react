import React from 'react';

export function Card({card, onCardClick}) {

	function handleClick() {
		onCardClick(card);
	}

	return (
		<>
			<div className="card">
				<button type="button" className="card__basket" />
				<img className="card__image" src={card.src} alt={card.name} onClick={handleClick} />
				<div className="card__container">
					<h3 className="card__title">{card.name}</h3>
					<div className="card__container-like">
						<button className="card__like" />
						<p className="card__number-likes">{card.likes.length}</p>
					</div>
				</div>
			</div>
		</ >
	);
}

export default Card;