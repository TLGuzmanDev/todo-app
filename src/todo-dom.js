import { getLocalProjects } from './index';
import { Todo } from './todo';

/* add todo object to its parent project and
   then add it to the todo list element */
function addTodoElement(title) {
  const parentNode = document.querySelector('#todo-list');
  let project = getProject();
  let todo = Todo(title);
  let todoElement = createTodoElement(title);
  project.addTodo(todo);
  parentNode.appendChild(todoElement);
}


/* create todo list item and return it */
function createTodoElement(title) {
  const todoElement = document.createElement('li');
  const checkbox = document.createElement('input');
  const heading = document.createElement('h3');
  
  checkbox.type = 'checkbox';
  heading.textContent = title;
  
  todoElement.appendChild(checkbox);
  todoElement.appendChild(heading);
  return todoElement;
}

/* render all todo items that belong to active project */
function renderTodoList(projectTitle) {
  // set the project title as todo section heading
  document.querySelector('#todo-heading').textContent = projectTitle;
  
  const parentNode = document.querySelector('#todo-list');
  let project = getProject();
  parentNode.textContent = '';
  
  for (let todo of project.getTodoList()) {
    let title = todo.getTitle();
    parentNode.appendChild(createTodoElement(title));
  }
}

/* get and return the active project */
function getProject() {
  let projectList = getLocalProjects();
  let projectTitle = document.querySelector('#todo-heading').textContent;
  for (let project of projectList) {
    if (project.getTitle() === projectTitle) {
      return project;
    }
  }
  return null;
}

export { addTodoElement, renderTodoList };