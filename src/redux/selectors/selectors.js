export const selectFilteredTickets = (state) => {
	const checkboxes = state.filter ? state.filter.checkboxes : null
	if (!checkboxes) {
		return []
	}

	const allChecked = checkboxes[0] ? checkboxes[0].checked : false

	if (allChecked) {
		return state.tickets.tickets
	}

	const filteredTickets = state.tickets.tickets.filter((ticket) => {
		const segments = ticket.segments

		const noStops = segments.some((segment) => segment.stops.length === 0)
		const oneStop = segments.some((segment) => segment.stops.length === 1)
		const twoStops = segments.some((segment) => segment.stops.length === 2)
		const threeStops = segments.some((segment) => segment.stops.length === 3)

		if (checkboxes[1] && checkboxes[1].checked && noStops) {
			return true
		}
		if (checkboxes[2] && checkboxes[2].checked && oneStop) {
			return true
		}
		if (checkboxes[3] && checkboxes[3].checked && twoStops) {
			return true
		}
		if (checkboxes[4] && checkboxes[4].checked && threeStops) {
			return true
		}

		return false
	})

	return filteredTickets
}
