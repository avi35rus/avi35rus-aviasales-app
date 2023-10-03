import React from 'react'
import PropTypes from 'prop-types'

import classes from './TicketCard.module.scss'

const TicketSegment = ({ segment }) => {
	const { origin, destination, date, stops, duration } = segment
	const formatDuration = (minutes) => {
		const hours = Math.floor(minutes / 60)
		const remainingMinutes = minutes % 60

		if (hours === 0) {
			return `${remainingMinutes}м`
		}

		if (remainingMinutes === 0) {
			return `${hours}ч`
		}

		return `${hours}ч ${remainingMinutes}м`
	}

	const formatStopsCount = (stops) => {
		const cases = [2, 0, 1, 1, 1, 2]
		const wordForms = ['пересадка', 'пересадки', 'пересадок']
		const stopsCount = stops.length

		if (!stops.length) {
			return 'Без пересадок'
		}

		const index = stopsCount % 100 > 4 && stopsCount % 100 < 20 ? 2 : cases[Math.min(stopsCount % 10, 5)]

		return `${stopsCount} ${wordForms[index]}`
	}

	const formatTime = (dateString) => {
		const date = new Date(dateString)
		const hours = date.getHours().toString().padStart(2, '0')
		const minutes = date.getMinutes().toString().padStart(2, '0')
		return `${hours}:${minutes}`
	}

	const calculateArrivalTime = (departureTime, duration) => {
		const departureDate = new Date(departureTime)
		const durationInMilliseconds = duration * 60 * 1000
		const arrivalTimeInMilliseconds = departureDate.getTime() + durationInMilliseconds
		const arrivalDate = new Date(arrivalTimeInMilliseconds)

		const hours = arrivalDate.getHours().toString().padStart(2, '0')
		const minutes = arrivalDate.getMinutes().toString().padStart(2, '0')

		return `${hours}:${minutes}`
	}

	return (
		<table className={classes.ticketTable}>
			<tbody>
				<tr>
					<td>
						{origin} - {destination}
					</td>
					<td>В пути</td>
					<td>{formatStopsCount(stops)}</td>
				</tr>
				<tr>
					<td>
						{formatTime(date)} - {calculateArrivalTime(date, duration)}
					</td>
					<td>{formatDuration(duration)}</td>
					<td>{stops.length > 0 ? stops.join(', ') : ''}</td>
				</tr>
			</tbody>
		</table>
	)
}

TicketSegment.propTypes = {
	segment: PropTypes.shape({
		origin: PropTypes.string.isRequired,
		destination: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		stops: PropTypes.arrayOf(PropTypes.string).isRequired,
		duration: PropTypes.number.isRequired,
	}).isRequired,
}

export default TicketSegment
