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
		const newToDo = {
			id: Math.random().toString(35),
			title: value,
			status: false,
		}
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

	const checkToDo = (id) => {
		const toDoIndex = toDos.findIndex((todo) => todo.id === id)
		const newToDos = [...toDos]
		newToDos[toDoIndex].status = !newToDos[toDoIndex].status
		saveToDos(newToDos)
	}

	const deleteToDo = (id) => {
		const newToDos = toDos.filter((todo) => todo.id !== id)
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
