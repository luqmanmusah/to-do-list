import removeTask from '../src/add_remove';

test('remove task from list', () => {
  const str = data.replace('div', '');
  const newTasks = [];
  tasks.forEach((task) => {
    if (task.index !== parseInt(str, 10)) {
      newTasks.push(task);
    }
    expect(task).toHaveLength(str - 1);
  });
});