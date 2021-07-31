import { drag, drop } from './tests-files/sorting';
import './tests-files/index';

describe('Functions for testing drag and drop events', () => {
  const list = global.document.getElementsByTagName('li');
  Array.from(list).forEach((li) => {
    test('renders the list elements', () => {
      expect(li).not.toBeNull();
    });
  });
  const li = list[0];
  test('drags and drops the element 1 position up (index - 1) ', async () => {
    const oldIndex = li.id;
    const divIdOld = li.getElementsByTagName('div')[0].id;
    drag();
    let newIndex;

    if (oldIndex === '0') {
      newIndex = '1';
    }
    if (oldIndex === '1') {
      newIndex = '0';
    }
    drop(oldIndex, newIndex);
    setTimeout(500, () => {
      const divIdNew = li.getElementsByTagName('div')[0].id;
      expect(divIdOld).not.toBe(divIdNew);
    });
  });
});