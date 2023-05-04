import React from 'react'
import { Input } from 'semantic-ui-react'

import { useToDos } from '../hooks/useToDos'

export const Search = () => {
	const { searchToDos } = useToDos()

	return (
		<Input
			fluid
			icon='search'
			placeholder='Search...'
			onChange={(e) => searchToDos(e.target.value)}
		/>
	)
}
