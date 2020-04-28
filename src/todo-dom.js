import { getLocalProjects } from './index';
import { Todo } from './todo';
import { addProjectElement } from './project-dom';

/* add todo object to its parent project and
   then add it to the todo list element */
function addTodoElement(title) {
  const parentNode = document.querySelector('#todo-list');
  let project = getProject();
  let todo = Todo(title);
  let todoElement = createTodoElement(title);

  if (project) {
    project.addTodo(todo);
  }  else {
    addProjectElement('temp');
    project = getProject();
    project.addTodo(todo);
  }

  parentNode.appendChild(todoElement);
}

/* create todo list item and return it */
function createTodoElement(title) {
  const todoElement = document.createElement('li');
  const checkbox = document.createElement('input');
  const heading = document.createElement('h3');
  const deleteIcon = document.createElement('i');
  const deleteBtn = document.createElement('button');

  checkbox.type = 'checkbox';
  deleteBtn.type = 'button';
  heading.textContent = title;
  deleteIcon.classList.add('fas');
  deleteIcon.classList.add('fa-trash-alt');
  deleteBtn.classList.add('delete-todo');
  
  setCheckboxEvent(checkbox, heading);
  setDeleteEvent(deleteBtn, title);

  deleteBtn.appendChild(deleteIcon);
  todoElement.appendChild(checkbox);
  todoElement.appendChild(heading);
  todoElement.appendChild(deleteBtn);
  return todoElement;
}

function setCheckboxEvent(button, heading) {
  button.addEventListener('click', () => {
    heading.classList.toggle('completed');
  })
}

function setDeleteEvent(button, title) {
  button.addEventListener('click', () => {
    deleteTodo(title);
  })
}

function deleteTodo(title) {
  let project = getProject(); 
  if (project) {
    let todoList = project.getTodoList();
    let index;
    
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].getTitle() === title) {
        index = i;
      }
    }

    todoList.splice(index, 1);
    renderTodoList(project.getTitle());
  }
}

/* render all todo items that belong to active project 
   ** if no title is passed
   ** clears heading and list */
function renderTodoList(projectTitle) {
  const parentNode = document.querySelector('#todo-list');
  const todoHeading = document.querySelector('#todo-heading');
  todoHeading.textContent = '';
  parentNode.textContent = '';
  
  if (projectTitle) {
    // set the project title as todo section heading
    todoHeading.textContent = projectTitle;
    let project = getProject();
    for (let todo of project.getTodoList()) {
      let title = todo.getTitle();
      parentNode.appendChild(createTodoElement(title));
    }
    console.log('test');
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