import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	checkboxes: [
		{ id: 'all', label: 'Все', checked: true },
		{ id: 'none', label: 'Без пересадок', checked: true },
		{ id: 'oneStop', label: '1 пересадка', checked: true },
		{ id: 'twoStops', label: '2 пересадки', checked: true },
		{ id: 'threeStops', label: '3 пересадки', checked: true },
	],
}

const stopsFilterSlice = createSlice({
	name: 'stopsFilter',
	initialState,
	reducers: {
		toggleCheckbox: (state, action) => {
			const { id } = action.payload

			if (id === 'all') {
				const areAllChecked = state.checkboxes.slice(1).every((checkbox) => checkbox.checked)
				const newCheckState = !areAllChecked

				state.checkboxes.forEach((checkbox) => {
					checkbox.checked = newCheckState
				})
			} else {
				const checkbox = state.checkboxes.find((checkbox) => checkbox.id === id)
				if (checkbox) {
					checkbox.checked = !checkbox.checked
				}

				const areAllChecked = state.checkboxes.slice(1).every((checkbox) => checkbox.checked)
				state.checkboxes[0].checked = areAllChecked
			}
		},
	},
})

export const { toggleCheckbox } = stopsFilterSlice.actions
export default stopsFilterSlice.reducer
