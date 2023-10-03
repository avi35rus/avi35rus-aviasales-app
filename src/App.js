import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import Logo from './components/Logo'
import TabsFilter from './components/TabsSort'
import StopsFilter from './components/StopsFilter'
import TicketList from './components/TicketList'
import store from './redux/store'

import './styles/App.scss'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Logo />
				<StopsFilter />
				<div className="content-container">
					<TabsFilter></TabsFilter>
					<TicketList></TicketList>
				</div>
			</div>
		</Provider>
	)
}

App.propTypes = {
	children: PropTypes.node,
}

export default App
