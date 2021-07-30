// import { removeTask } from '../src/add_remove';
import { addTask } from '../src/add_remove';

// describe('remove task from list', () => {
//   test('remove task', () => {
//     const str = data.replace('div', '');

//   });
// });


describe('add and remove from list', () => {
  test('add test', () => {
    expect(addTask('First task')).toBe('First task');
  });
});