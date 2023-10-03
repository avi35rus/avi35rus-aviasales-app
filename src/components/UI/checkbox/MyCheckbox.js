import React from 'react'
import PropTypes from 'prop-types'

import './MyCheckbox.scss'

const MyCheckbox = ({ checked, onChange, labelText }) => {
	return (
		<label className="myCheckbox">
			<input type="checkbox" checked={checked} onChange={onChange} />
			<span className="newCheckmark"></span>
			{labelText}
		</label>
	)
}

MyCheckbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	labelText: PropTypes.string.isRequired,
}

export default MyCheckbox
