import React from 'react'
import { Progress } from 'semantic-ui-react'

import { useToDos } from '../hooks/useToDos'

export const Counter = () => {
	const { totalTodos, completedToDos, percent } = useToDos()

	return (
		<section style={{ fontSize: '2rem' }}>
			<p>{`Hoy completaste ${completedToDos} de ${totalTodos} ToDo's`}</p>
			<Progress percent={percent} indicating />
		</section>
	)
}
