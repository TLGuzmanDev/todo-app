import {Todo} from './todo';
import {Project} from './project'
import {addProject, addTodo, selectProject, addTodoToProject} from './dom'


let localProjects = [];

let project = Project('project 1', []);
let todo = Todo('task 1', 'des', 'due', 'p');
let todo2 = Todo('task 2', 'des2', 'due2', 'p2');
project.addTodo(todo);
project.addTodo(todo2);
localProjects.push(project);

addProject(localProjects[0], 0);
selectProject(localProjects[0]);


document.querySelector('#submit-project').addEventListener('click', (e) => {
  let title = document.querySelector('#project-input').value;
  if (title) {
    let project = Project(title, []);
    addProject(project, localProjects.length);
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
    addTodoToProject(todo);
  }
  document.querySelector('#add-todo').reset();
  e.preventDefault();
});

function getLocalProjects() {
  return localProjects;
}

export { getLocalProjects };