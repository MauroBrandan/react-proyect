import './App.css';
import { Button, Grid } from 'semantic-ui-react'
import { Header } from './components/Header';
import { Search } from './components/Search';
import { ToDoList } from './components/ToDoList';
import { AddToDo } from './components/AddToDo';

function App() {
  return (
  <>
    <Header />
    <Grid textAlign='center' style={{ height: '55vh' }} verticalAlign='middle'>
      <Grid.Column style={{ width: "80%", maxWidth: 500 }}>
          {/* Progress Bar */}        
          <Search />       
          <ToDoList />   
          <AddToDo />
      </Grid.Column>
    </Grid>
  </>
  );
}

export default App;
