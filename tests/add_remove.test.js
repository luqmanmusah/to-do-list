import addRemove from '../src/add_remove';

describe('its', () => {
  it('should throw error if file is not removed', () => {
    expect(() => {
      addRemove.removeTask();
    }).toThrow();
  });
});