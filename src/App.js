import logo from './logo.svg';
import './App.css';
import Column from "./Column";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
function App() {
  const tasks = [
    {
      id: 1,
      title:'Learn JS',
      status:'todo'

    },
  {
    id: 2,
    title:'Learn CSS',
    status:'Progress'

  },
  {
    id: 3,
    title:'Learn React',
    status:'Review'
  }
  ]
  const statuses = ['todo','Progress','Review'];
  const createTaskButton = () =>{
    console.log('create Task Button')
  }
  return (
<div>
  <Button variant="contained" disableElevation onClick={createTaskButton}>Create Task</Button>;
  <TextField id="outlined-basic" label="Outlined" variant="outlined" value={123}/>
  <Grid container spacing={2}>
    {statuses.map(status => <Column tasks={tasks} status={status}/>)}

  </Grid>

</div>
  );
}

export default App;
