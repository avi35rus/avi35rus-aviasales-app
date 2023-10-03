import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TicketCard from '../TicketCard'
import ShowMoreButton from '../ShowMoreButton'
import { fetchTickets } from '../../redux/reducers/ticketSlice'
import { selectFilteredTickets } from '../../redux/selectors/selectors'

import classes from './TicketList.module.scss'

const TicketList = () => {
	const dispatch = useDispatch()
	const { loading, error } = useSelector((state) => state.tickets)
	const filteredTickets = useSelector(selectFilteredTickets)
	const activeTab = useSelector((state) => state.sort.sortType)

	const [displayedTickets, setDisplayedTickets] = useState(5)

	useEffect(() => {
		dispatch(fetchTickets())
	}, [dispatch])

	const showMoreTickets = () => {
		setDisplayedTickets((prev) => prev + 5)
	}

	const sortTickets = (tickets, sortBy) => {
		if (sortBy === 'cheapest') {
			return [...tickets].sort((a, b) => a.price - b.price)
		} else if (sortBy === 'fastest') {
			return [...tickets].sort((a, b) => {
				const aDuration = a.segments[0].duration + a.segments[1].duration
				const bDuration = b.segments[0].duration + b.segments[1].duration
				return aDuration - bDuration
			})
		}
		return tickets
	}

	const visibleTickets = sortTickets(filteredTickets, activeTab).slice(0, displayedTickets)

	return (
		<div className={classes.ticketList}>
			{error ? (
				<div>Error: {error}</div>
			) : loading ? (
				<div>Загрузка...</div>
			) : (
				<>
					{filteredTickets.length === 0 ? (
						<div>Рейсов, подходящих под заданные фильтры, не найдено</div>
					) : (
						<>
							{visibleTickets.map((ticket) => (
								<TicketCard key={ticket.id} ticket={ticket} />
							))}
							{displayedTickets < filteredTickets.length && (
								<ShowMoreButton onClick={showMoreTickets}>Показать еще 5 билетов!</ShowMoreButton>
							)}
						</>
					)}
				</>
			)}
		</div>
	)
}

TicketList.propTypes = {}

export default TicketList
