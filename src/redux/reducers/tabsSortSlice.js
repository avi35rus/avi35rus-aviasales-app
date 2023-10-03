import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	sortType: 'cheapest',
}

const tabsSortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSortType: (state, action) => {
			state.sortType = action.payload
		},
	},
})

export const { setSortType } = tabsSortSlice.actions
export default tabsSortSlice.reducer
