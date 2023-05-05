import React from 'react'
import { List } from 'semantic-ui-react'

import { ToDo } from './ToDo'
import { useToDos } from '../hooks/useToDos'

export const ToDoList = () => {
	const { searchedToDos } = useToDos()

	return (
		<List verticalAlign='middle' size='huge' divided relaxed>
			{searchedToDos.map(({ id, title, status }) => (
				<ToDo key={id} id={id} todoTitle={title} todoStatus={status} />
			))}
		</List>
	)
}
