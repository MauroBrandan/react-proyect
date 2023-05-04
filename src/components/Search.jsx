import React from 'react'
import { Input } from 'semantic-ui-react'

export const Search = ({ onSearch }) => {
	const handleChange = (e) => {
		onSearch(e.target.value)
	}

	return (
		<Input fluid icon='search' placeholder='Search...' onChange={handleChange} />
	)
}
