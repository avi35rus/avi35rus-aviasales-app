import React from 'react'
import PropTypes from 'prop-types'

import styles from './ShowMoreButton.module.scss'

const ShowMoreButton = ({ children, onClick }) => {
	return (
		<div className={styles.showMoreButton}>
			<button onClick={onClick}>{children}</button>
		</div>
	)
}

ShowMoreButton.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func.isRequired,
}

export default ShowMoreButton
