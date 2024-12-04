import { Provider } from 'react-redux';
import { store } from './store/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Task Management Dashboard
        </Typography>
        <Box sx={{ mb: 4 }}>
          <TaskForm />
          <TaskFilter />
          <TaskList />
        </Box>
      </Container>
    </Provider>
  );
}

export default App;