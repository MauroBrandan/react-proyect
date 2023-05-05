import { useState, createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const ToDosContext = createContext()

export const ToDosProvider = ({ children }) => {
	const [toDos, saveToDos] = useLocalStorage('ToDos', [])
	const [searchedToDos, setSearchedToDos] = useState(toDos)

	const totalTodos = toDos.length
	const completedToDos = toDos.filter((todo) => todo.status === true).length
	const percent = (completedToDos * 100) / totalTodos

	const addToDo = (value) => {
		const newToDo = { title: value, status: false }
		const newToDos = toDos.concat(newToDo)
		saveToDos(newToDos)
		setSearchedToDos(newToDos)
	}

	const searchToDos = (value) => {
		const formattedValue = value.toLowerCase()
		const newToDos = toDos.filter((todo) =>
			todo.title.toLowerCase().includes(formattedValue)
		)
		setSearchedToDos(newToDos)
	}

	const checkToDo = (newToDo) => {
		const toDoIndex = toDos.findIndex((todo) => todo.title === newToDo)
		const newToDos = [...toDos]
		newToDos[toDoIndex].status = !newToDos[toDoIndex].status
		saveToDos(newToDos)
	}

	const deleteToDo = (deletedToDo) => {
		const newToDos = toDos.filter((todo) => todo.title !== deletedToDo)
		saveToDos(newToDos)
		setSearchedToDos(newToDos)
	}

	return (
		<ToDosContext.Provider
			value={{
				searchedToDos,
				totalTodos,
				completedToDos,
				percent,
				addToDo,
				searchToDos,
				checkToDo,
				deleteToDo,
			}}
		>
			{children}
		</ToDosContext.Provider>
	)
}
