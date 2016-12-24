import Todo from '../components/TodoList.html';

const TodoListComponent = new Todo({
  target: document.querySelector('.todo-list'),
  data: {
    todos: [
      {
        name: 'Make List',
      },
      {
        name: 'Check off item',
      },
      {
        name: 'Add a new item',
      }
    ]
  }
});

export default TodoListComponent;
