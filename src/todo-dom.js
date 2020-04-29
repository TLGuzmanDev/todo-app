import { getLocalProjects } from './index';
import { Todo } from './todo';
import { addProjectElement } from './project-dom';

/* add todo object to its parent project and
   then add it to the todo list element */
function addTodoElement(title) {
  const parentNode = document.querySelector('#todo-list');
  let project = getProject();
  let todo = Todo(title);
  let todoElement = createTodoElement(todo);

  if (project) {
    project.addTodo(todo);
  } else {
    addProjectElement('temp');
    project = getProject();
    project.addTodo(todo);
  }

  parentNode.appendChild(todoElement);
}

/* create todo list item and return it */
function createTodoElement(todo) {
  let title = todo.getTitle();
  const todoElement = document.createElement('li');
  const checkbox = document.createElement('input');
  const heading = document.createElement('h3');
  const deleteIcon = document.createElement('i');
  const deleteBtn = document.createElement('button');
  const dateInput = createDateInput(todo);
  const priorityInput = createPriortyInput(todo);
  const descriptionInput = createDesInput(todo);
  const expandBtn = createExpandBtn();

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
  todoElement.appendChild(dateInput);
  todoElement.appendChild(priorityInput);
  todoElement.appendChild(descriptionInput);
  todoElement.appendChild(expandBtn);

  setExpandEvent(expandBtn, priorityInput, descriptionInput, todoElement);
  return todoElement;
}

function createExpandBtn() {
  const expandBtn = document.createElement('button');
  expandBtn.type = 'button';
  expandBtn.value = 'open';
  expandBtn.classList.add('expand');
  expandBtn.appendChild(createOpenCloseIcon(expandBtn));
  return expandBtn;
}

function createOpenCloseIcon(button) {
  let option = button.value;
  const icon = document.createElement('i');
  icon.classList.add('fas');
  if (option === 'open') {
    icon.classList.add('fa-angle-double-down');
    button.value = 'closed';
  } else {
    icon.classList.add('fa-angle-double-up');
    button.value = 'open';
  }
  return icon;
}

function createDateInput(todo) {
  let dateString = todo.getDueDate();
  const dateInput = document.createElement('input');
  dateInput.classList.add('date');
  dateInput.type = 'date';
  dateInput.value = dateString;
  setDateEvent(dateInput, todo);
  return dateInput;
}

function createDesInput(todo) {
  const descriptionInput = document.createElement('textarea');
  descriptionInput.classList.add('description');
  descriptionInput.classList.add('hidden');
  descriptionInput.rows = '5';
  descriptionInput.cols = '30';
  descriptionInput.value = todo.getDescription();
  setDesEvent(descriptionInput, todo);
  return descriptionInput;
}

function createPriortyInput(todo) {
  const select = document.createElement('select');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');

  option1.value = 'low';
  option2.value = 'med';
  option3.value = 'high';
  option1.textContent = 'low';
  option2.textContent = 'med';
  option3.textContent = 'high';

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);

  select.classList.add('priority');
  select.classList.add('hidden');

  return select;
}

function setExpandEvent(button, input1, input2, container) {
  button.addEventListener('click', (e) => {
    button.textContent = '';
    button.appendChild(createOpenCloseIcon(button));
    container.classList.toggle('expanded');
    input1.classList.toggle('hidden');
    input2.classList.toggle('hidden');
  });
}

function setDateEvent(input, todo) {
  input.addEventListener('change', () => {
    todo.setDueDate(input.value);
  });
}

function setDesEvent(input, todo) {
  input.addEventListener('change', () => {
    todo.setDescription(input.value);
  });
}

function setCheckboxEvent(button, heading) {
  button.addEventListener('click', () => {
    heading.classList.toggle('completed');
  });
}

function setDeleteEvent(button, title) {
  button.addEventListener('click', () => {
    deleteTodo(title);
  });
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
      parentNode.appendChild(createTodoElement(todo));
    }
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
