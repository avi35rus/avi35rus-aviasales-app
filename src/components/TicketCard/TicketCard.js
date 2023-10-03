import React from 'react'
import PropTypes from 'prop-types'

import TicketSegment from './TicketSegment'
import classes from './TicketCard.module.scss'

const TicketCard = ({ ticket }) => {
	const { price, carrier } = ticket

	const getAirlineLogoUrl = (iataCode) => `//pics.avs.io/99/36/${iataCode}.png`

	return (
		<div className={classes.ticketCard}>
			<div className={classes.ticketHeader}>
				<div className={classes.ticketPrice}>{price.toLocaleString('ru-RU')} Р</div>
				<img src={getAirlineLogoUrl(carrier)} alt={`Логотип ${carrier}`} className={classes.ticketCarrier} />
			</div>
			{ticket.segments.map((segment, index) => (
				<TicketSegment key={index} segment={segment} />
			))}
		</div>
	)
}

TicketCard.propTypes = {
	ticket: PropTypes.shape({
		price: PropTypes.number.isRequired,
		carrier: PropTypes.string.isRequired,
		segments: PropTypes.arrayOf(
			PropTypes.shape({
				origin: PropTypes.string.isRequired,
				destination: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
				stops: PropTypes.arrayOf(PropTypes.string).isRequired,
				duration: PropTypes.number.isRequired,
			})
		).isRequired,
	}).isRequired,
}

export default TicketCard
