import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/taskSlice';
import { ToggleButton, ToggleButtonGroup, Paper } from '@mui/material';

function TaskFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.tasks.filter);

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <ToggleButtonGroup
        value={currentFilter}
        exclusive
        onChange={(e, value) => value && dispatch(setFilter(value))}
        fullWidth
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="pending">Pending</ToggleButton>
        <ToggleButton value="overdue">Overdue</ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
}

export default TaskFilter;