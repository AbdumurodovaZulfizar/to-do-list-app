import todoModel from '../model/todoModel';
import '../localStorage';

const TodoModel = todoModel();

const todo = TodoModel.todo('To-Do', 'high', '10/10/2021', 'Todo Description');
beforeEach(() => {
  localStorage.setItem('projects', JSON.stringify([{
    title: 'Project',
  }]));
  localStorage.setItem('Project', JSON.stringify([{
    title: 'Completed Todo',
    priority: 'high',
    date: '10/10/2021',
    description: 'Todo Description',
    isCompleted: true,
  }, {
    title: 'Uncompleted Todo',
    priority: 'high',
    date: '10/10/2021',
    description: 'Project has been completed',
    isCompleted: false,
  }]));
});
afterAll(() => {
  localStorage.removeItem('projects');
  localStorage.removeItem('Project');
});

test('should set the title with the given value', () => {
  expect(todo.title).toEqual('To-Do');
});
test('should not be equal to Null', () => {
  expect(todo.title).not.toBeNull();
});
test('should not be equal to Undefined', () => {
  expect(todo.title).not.toBeUndefined();
});
test('should set the priority with the given value', () => {
  expect(todo.priority).toEqual('high');
});
test('should not set the priority as Undefined', () => {
  expect(todo.priority).not.toBeUndefined();
});
test('should not set the priority as Null', () => {
  expect(todo.priority).not.toBeNull();
});
test('should set the date with the given value', () => {
  expect(todo.date).toEqual('10/10/2021');
});
test('should not set the date as Undefined', () => {
  expect(todo.date).not.toBeUndefined();
});
test('should not set the date as Null', () => {
  expect(todo.date).not.toBeNull();
});
test('should set the description with the given value', () => {
  expect(todo.description).toEqual('Todo Description');
});
test('should not set the description as Undefined', () => {
  expect(todo.description).not.toBeUndefined();
});
test('should not set the description as Null', () => {
  expect(todo.description).not.toBeNull();
});
test('should set the isCompleted as false by default', () => {
  expect(todo.isCompleted).toEqual(false);
});
test('should not set the isCompleted as Undefined', () => {
  expect(todo.isCompleted).not.toBeUndefined();
});
test('should not set the isCompleted as Null', () => {
  expect(todo.isCompleted).not.toBeNull();
});
test('returns the selected project by its ID', () => {
  expect(TodoModel.getProject(0)).toEqual({
    title: 'Project',
  });
});
test('returns the selected project by its ID', () => {
  expect(TodoModel.getProject(0)).not.toBeNull();
});
test('returns the selected project by its ID', () => {
  expect(TodoModel.getProject(0)).not.toBeUndefined();
});
test('returns all todos on selected project according to completed or not', () => {
  expect(TodoModel.all(0)).toEqual([{
    title: 'Uncompleted Todo',
    priority: 'high',
    date: '10/10/2021',
    description: 'Project has been completed',
    isCompleted: false,
  }, {
    title: 'Completed Todo',
    priority: 'high',
    date: '10/10/2021',
    description: 'Todo Description',
    isCompleted: true,
  }]);
});
test('it should not be Undefined', () => {
  expect(TodoModel.all(0)).not.toBeUndefined();
});
test('it should not be Null', () => {
  expect(TodoModel.all(0)).not.toBeNull();
});
test('returns the selected project according to todo and project id', () => {
  expect(TodoModel.get(0, 0)).toEqual({
    title: 'Uncompleted Todo',
    priority: 'high',
    date: '10/10/2021',
    description: 'Project has been completed',
    isCompleted: false,
  });
});
test('it should not be Null', () => {
  expect(TodoModel.get(0, 0)).not.toBeNull();
});
test('it should not be Undefined', () => {
  expect(TodoModel.get(0, 0)).not.toBeUndefined();
});

test('it will save an element to the list', () => {
  TodoModel.save({
    title: 'Saved Project',
    priority: 'medium',
    date: '11/11/2021',
    description: 'It is saved project',
    isCompleted: false,
  }, 0);
  expect(TodoModel.all(0).length).toEqual(3);
});

test('it will save the elemenr before completed projects if it is not completed', () => {
  TodoModel.save({
    title: 'Saved Project',
    priority: 'medium',
    date: '11/11/2021',
    description: 'It is saved project',
    isCompleted: false,
  }, 0);
  expect(TodoModel.all(0).[1]).toEqual({
    title: 'Saved Project',
    priority: 'medium',
    date: '11/11/2021',
    description: 'It is saved project',
    isCompleted: false,
  });
});

test('it will not equal to Null', () => {
  TodoModel.save({
    title: 'Saved Project',
    priority: 'medium',
    date: '11/11/2021',
    description: 'It is saved project',
    isCompleted: false,
  }, 0);
  expect(TodoModel.all(0).[1]).not.toBeNull();
});

test('it will not equal to Undefined', () => {
  TodoModel.save({
    title: 'Saved Project',
    priority: 'medium',
    date: '11/11/2021',
    description: 'It is saved project',
    isCompleted: false,
  }, 0);
  expect(TodoModel.all(0).[1]).not.toBeUndefined();
});

test('it will remove the selected element from list', () => {
  TodoModel.remove(0, 1);
  expect(TodoModel.all(0).length).toEqual(1);
});

test('it will not be equal to Null', () => {
  TodoModel.remove(0, 1);
  expect(TodoModel.all(0).length).not.toBeNull();
});

test('it will remove the selected element from list', () => {
  TodoModel.remove(0, 1);
  expect(TodoModel.all(0).length).not.toBeUndefined();
});

test('it will edit the selected element', () => {
  TodoModel.edit(0, 1, {
    title: 'Edited Todo',
    priority: 'low',
    date: '01/01/2020',
    description: 'It is edited todo',
    isCompleted: false,
  });
  expect(TodoModel.get(0, 1)).toEqual({
    title: 'Edited Todo',
    priority: 'low',
    date: '01/01/2020',
    description: 'It is edited todo',
    isCompleted: false,
  });
});

test('it is not equal to Null', () => {
  TodoModel.edit(0, 1, {
    title: 'Edited Todo',
    priority: 'low',
    date: '01/01/2020',
    description: 'It is edited todo',
    isCompleted: false,
  });
  expect(TodoModel.get(0, 1)).not.toBeNull();
});

test('it is not equal to Undefined', () => {
  TodoModel.edit(0, 1, {
    title: 'Edited Todo',
    priority: 'low',
    date: '01/01/2020',
    description: 'It is edited todo',
    isCompleted: false,
  });
  expect(TodoModel.get(0, 1)).not.toBeUndefined();
});