// 

function addProject(project) {
  const projectEle = document.createElement('li');
  projectEle.textContent = project.getTitle();
  document.querySelector('#project-list').appendChild(projectEle);
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

export { 
  addProject, 
  addTodo,
};