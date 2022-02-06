import logo from './logo.svg';
import './App.css';
import Column from "./Column";

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
  const statuses = ['todo','Progress','Review']
  return (
<div>
  {statuses.map(status => <Column tasks={tasks} status={status}/>)}
</div>
  );
}

export default App;
