import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import { TextField, Button, Box, Paper } from '@mui/material';

function TaskForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      dispatch(addTask(task));
      setTask({ title: '', description: '', dueDate: '' });
    }
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
          <TextField
            label="Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            multiline
            rows={2}
          />
          <TextField
            type="date"
            label="Due Date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" type="submit">Add Task</Button>
        </Box>
      </form>
    </Paper>
  );
}

export default TaskForm;