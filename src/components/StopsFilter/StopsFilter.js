import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

import { toggleCheckbox } from '../../redux/reducers/stopsFilterSlice'
import MyCheckbox from '../UI/checkbox'

import classes from './StopsFilter.module.scss'

const StopsFilter = () => {
	const checkboxes = useSelector((state) => state.filter.checkboxes)
	const dispatch = useDispatch()

	const handleCheckboxChange = (id) => {
		dispatch(toggleCheckbox({ id }))
	}

	return (
		<div className={classes.stopsFilterContainer}>
			<h2>Количество пересадок</h2>
			{checkboxes.map((checkbox) => (
				<MyCheckbox
					key={checkbox.id}
					checked={checkbox.checked}
					onChange={() => handleCheckboxChange(checkbox.id)}
					labelText={checkbox.label}
				/>
			))}
		</div>
	)
}

StopsFilter.propTypes = {}

export default StopsFilter
