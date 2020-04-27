import { addProjectElement } from './project-dom';
import { addTodoElement } from './todo-dom';

let localProjects = [];

// set project form action to create project
document.querySelector('#submit-project').addEventListener('click', (e) => {
  let title = document.querySelector('#project-input').value;
  if (title) {
    addProjectElement(title);
  }
  document.querySelector('#add-project').reset();
  e.preventDefault();
});


// set todo form action to create todo
document.querySelector('#submit-todo').addEventListener('click', (e) => {
  let title = document.querySelector('#title-input').value;
  if (title) {
    addTodoElement(title);
  }
  document.querySelector('#add-todo').reset();
  e.preventDefault();
});

function getLocalProjects() {
  return localProjects;
}

export { getLocalProjects };