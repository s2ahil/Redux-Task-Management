import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../store/taskSlice';
import { List, ListItem, ListItemText, IconButton, Checkbox, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { isAfter, parseISO } from 'date-fns';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'pending':
        return !task.completed;
      case 'overdue':
        return !task.completed && task.dueDate && isAfter(new Date(), parseISO(task.dueDate));
      default:
        return true;
    }
  });

  return (
    <Paper>
      <List>
        {filteredTasks.map(task => (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => dispatch(deleteTask(task.id))}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              checked={task.completed}
              onChange={() => dispatch(toggleComplete(task.id))}
            />
            <ListItemText
              primary={task.title}
              secondary={`${task.description} ${task.dueDate ? `(Due: ${task.dueDate})` : ''}`}
              sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default TaskList;