import { combineReducers } from 'redux'

import stopsFilterSlice from './stopsFilterSlice'
import tabsSortSlice from './tabsSortSlice'
import ticketSlice from './ticketSlice'

const rootReducer = combineReducers({
	filter: stopsFilterSlice,
	sort: tabsSortSlice,
	tickets: ticketSlice,
})

export default rootReducer
