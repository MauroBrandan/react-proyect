import './App.css';
import { Grid } from 'semantic-ui-react'
import { Header } from './components/Header';
import { Search } from './components/Search';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
  <>
    <Header />
    <Grid textAlign='center' style={{ height: '55vh' }} verticalAlign='middle'>
      <Grid.Column style={{ width: "80%", maxWidth: 500 }}>
      {/* Progress Bar */}        
      <Search />       
      <ToDoList />    
      </Grid.Column>
    </Grid>
    {/* Add To do */} 
  </>
  );
}

export default App;
