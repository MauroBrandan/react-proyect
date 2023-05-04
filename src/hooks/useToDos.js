import { useContext } from 'react'
import { ToDosContext } from '../context/ToDosContext'

export const useToDos = () => {
	const context = useContext(ToDosContext)
	return context
}
