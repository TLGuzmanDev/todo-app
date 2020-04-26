import {Todo} from './todo';
import {Project} from './project'
import {addProject, addTodo} from './dom'

let localProjects = [];

let todo = Todo('title', 'des', 'due', 'p');
let todo2 = Todo('title2', 'des2', 'due2', 'p2');
let todoList = [];
todoList.push(todo);
todoList.push(todo2);


document.querySelector('#submit-project').addEventListener('click', (e) => {
  let title = document.querySelector('#project-input').value;
  if (title) {
    let project = Project(title, []);
    addProject(project);
    localProjects.push(project);
  }
  document.querySelector('#add-project').reset();
  e.preventDefault();
});


document.querySelector('#submit-todo').addEventListener('click', (e) => {
  let title = document.querySelector('#title-input').value;
  if (title) {
    let todo = Todo(title);
    addTodo(todo);
  }
  document.querySelector('#add-todo').reset();
  e.preventDefault();
});
