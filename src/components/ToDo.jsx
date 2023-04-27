import React from 'react'
import { List } from 'semantic-ui-react'

export const ToDo = ({ todoTitle, todoStatus }) => {
	return (
		<List.Item>
			{todoStatus ? (
				<List.Icon
					name='check square'
					color='green'
					size='large'
					style={{ cursor: 'pointer' }}
				/>
			) : (
				<List.Icon
					name='check square outline'
					size='large'
					style={{ cursor: 'pointer' }}
				/>
			)}
			<List.Content>{todoTitle}</List.Content>
			<List.Icon
				name='delete'
				color='red'
				size='small'
				style={{ cursor: 'pointer' }}
			/>
		</List.Item>
	)
}
