import React from 'react'
import { List } from 'semantic-ui-react'

export const ToDo = ({ todoTitle, todoStatus, onCheck, onDelete }) => {
	return (
		<List.Item>
			<List.Icon
				name={`check square ${!todoStatus && 'outline'}`}
				color='green'
				size='large'
				style={{ cursor: 'pointer' }}
				onClick={onCheck}
			/>
			<List.Content>{todoTitle}</List.Content>
			<List.Icon
				name='delete'
				color='red'
				size='small'
				style={{ cursor: 'pointer' }}
				onClick={onDelete}
			/>
		</List.Item>
	)
}
