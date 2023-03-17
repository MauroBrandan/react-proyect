import './App.css';
import { Grid, Header } from 'semantic-ui-react'

function App() {
  return (
  <>
    <Header as='h1' color='teal'>
      My to do list
    </Header>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 550 }}>
      {/* Progress Bar */}        
      {/* Search */}        
      {/* To do List */}      
      </Grid.Column>
    </Grid>
    {/* Add To do */} 
  </>
  );
}

export default App;
