import { getLocalProjects } from './index'

function addProject(project, index) {
  const projectEle = document.createElement('li');
  const title = document.createElement('h3');
  title.textContent = project.getTitle();
  projectEle.value = index;
  projectEle.appendChild(title);
  document.querySelector('#project-list').appendChild(projectEle);
  addProjectEvent(projectEle);
}

function addProjectEvent(element) {
  let projectList = getLocalProjects();
  element.addEventListener('click', () => {
    let index = +element.value;
    selectProject(projectList[index]);
    console.log('selected project: ' + projectList[index].getTitle());
  });
}

function addTodo(todo) {
  const todoEle = document.createElement('li');
  const checkbox = document.createElement('input');
  const title = document.createElement('h3');
  checkbox.type = 'checkbox';
  title.textContent = todo.getTitle();
  todoEle.appendChild(checkbox);
  todoEle.appendChild(title);
  document.querySelector('#todo-list').appendChild(todoEle);
}

function addTodoToProject(todo) {
  let projectList = getLocalProjects();
  let title = document.querySelector('#todo-title').textContent;
  for (let project of projectList) {
    if(project.getTitle().toUpperCase() === title.toUpperCase()) {
      project.addTodo(todo);
      console.log(`add ${todo.getTitle()} to ${project.getTitle()}`);
    }
  }
}

function loadTodoList(project) {
  for (let todo of project.getTodoList()) {
    addTodo(todo);
  }
}

function selectProject(project) {
  let title = project.getTitle();
  clearList();
  setProjectActive(title);
  setTodoTitle(title);
  loadTodoList(project);
}

function setTodoTitle(title) {
  document.querySelector('#todo-title').textContent = title.toUpperCase();
}

function clearList() {
  document.querySelector('#todo-list').textContent = '';
}

function setProjectActive(title) {
  let projectList = document.querySelector('#project-list').childNodes;
  projectList.forEach((element) => {
    if (element.querySelector('h3').textContent === title) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

export { 
  addProject, 
  addTodo,
  loadTodoList,
  selectProject,
  addTodoToProject,
};