import React from 'react'
import { List } from 'semantic-ui-react'

import { ToDo } from './ToDo'

export const ToDoList = ({ list, checkToDo, deleteToDo }) => {
	return (
		<List verticalAlign='middle' size='huge' divided relaxed>
			{list.map(({ title, status }) => (
				<ToDo
					key={title}
					todoTitle={title}
					todoStatus={status}
					onCheck={() => checkToDo(title)}
					onDelete={() => deleteToDo(title)}
				/>
			))}
		</List>
	)
}
