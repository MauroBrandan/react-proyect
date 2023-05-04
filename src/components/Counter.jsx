import React from 'react'
import { Progress } from 'semantic-ui-react'

export const Counter = ({ list }) => {
	const completedToDos = list.filter((todo) => todo.status == true).length
	const percent = (completedToDos * 100) / list.length

	return (
		<section style={{ fontSize: '2rem' }}>
			<p>{`Hoy completaste ${completedToDos} de ${list.length} ToDo's`}</p>
			<Progress percent={percent} indicating />
		</section>
	)
}
