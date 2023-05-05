import { Layout } from './components/Layout'
import { Counter } from './components/Counter.jsx'
import { Search } from './components/Search'
import { ToDoList } from './components/ToDoList'
import { AddToDoButton } from './components/AddToDoButton'

function App() {
	return (
		<Layout>
			<Counter />
			<Search />
			<ToDoList />
			<AddToDoButton />
		</Layout>
	)
}

export default App
