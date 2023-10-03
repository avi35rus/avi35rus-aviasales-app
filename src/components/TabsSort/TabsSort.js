import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSortType } from '../../redux/reducers/tabsSortSlice'

import classes from './TabsSort.module.scss'

const TabsSort = () => {
	const tabsData = [
		{ id: 'cheapest', label: 'Самый дешевый' },
		{ id: 'fastest', label: 'Самый быстрый' },
		{ id: 'optimal', label: 'Оптимальный' },
	]

	const activeTab = useSelector((state) => state.sort.sortType)

	const dispatch = useDispatch()

	const handleTabClick = (tab) => {
		dispatch(setSortType(tab))
	}

	return (
		<div className={classes.tabsSort}>
			{tabsData.map((tab) => (
				<div
					key={tab.id}
					className={`${classes.tab} ${activeTab === tab.id ? classes.active : ''}`}
					onClick={() => handleTabClick(tab.id)}
				>
					{tab.label}
				</div>
			))}
		</div>
	)
}

TabsSort.propTypes = {}

export default TabsSort
