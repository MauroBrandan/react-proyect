import { Layout } from './components/Layout'
import { Counter } from './components/Counter.jsx'
import { Search } from './components/Search'
import { ToDoList } from './components/ToDoList'
import { AddToDo } from './components/AddToDo'

function App() {
	return (
		<Layout>
			<Counter />
			<Search />
			<ToDoList />
			<AddToDo />
		</Layout>
	)
}

export default App
