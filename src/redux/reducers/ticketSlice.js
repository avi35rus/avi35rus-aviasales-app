import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
	const response = await fetch('https://aviasales-test-api.kata.academy/search')
	const { searchId } = await response.json()

	const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
	const { tickets, stop } = await ticketsResponse.json()

	const ticketsWithId = tickets.map((ticket, index) => ({
		...ticket,
		id: index + 1,
	}))

	return { tickets: ticketsWithId, stop }
})

const initialState = {
	tickets: [],
	loading: false,
	error: null,
}

const ticketSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTickets.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchTickets.fulfilled, (state, action) => {
				state.loading = false
				state.tickets = action.payload.tickets
				state.error = null
			})
			.addCase(fetchTickets.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export default ticketSlice.reducer
