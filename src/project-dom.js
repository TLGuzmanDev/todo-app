import { getLocalProjects } from './index';
import { Project } from './project';
import { renderTodoList } from './todo-dom'

/* add project to project list array and
   then add it to the project list element */
function addProjectElement(title) {
  const parentNode = document.querySelector('#project-list');
  let projectList = getLocalProjects();
  let project = Project(title, []);
  let projectElement = createProjectElement(title);
  projectList.push(project);
  parentNode.appendChild(projectElement);
  setProjectActive(title);
}

/* create project list item and return it */
function createProjectElement(title) {
  const projectElement = document.createElement('li');
  const titleBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const heading = document.createElement('h3');
  const deleteIcon = document.createElement('i');

  heading.textContent = title;
  titleBtn.type = 'button';
  deleteBtn.type = 'button';
  deleteBtn.classList.add('delete-project');
  deleteIcon.classList.add('fas');
  deleteIcon.classList.add('fa-trash-alt');

  addTitleEvent(titleBtn, title);
  setDeleteEvent(deleteBtn, title);

  titleBtn.appendChild(heading);
  deleteBtn.appendChild(deleteIcon);
  projectElement.appendChild(titleBtn);
  projectElement.appendChild(deleteBtn);

  return projectElement;
}

/* render all projects */
function renderProjectList() {
  const parentNode = document.querySelector('#project-list');
  let projectList = getLocalProjects();

  parentNode.textContent = '';
  for (let project of projectList) {
    let title = project.getTitle();
    parentNode.appendChild(createProjectElement(title));
  }
  console.log('rendered project list');
}

/* when project title button is clicked
   - set project element class to active
   - render its todo list */
function addTitleEvent(button, title) {
  button.addEventListener('click', () => {
    setProjectActive(title);
    console.log('selected project: ' + title);
  });
}

/* set project element with matching 
   title to class active and render its todo list */
function setProjectActive(title) {
  let projectList = document.querySelector('#project-list').childNodes;
  projectList.forEach((element) => {
    if (element.querySelector('h3').textContent === title) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
  renderTodoList(title);
}

/* when delete button is clicked
   delete project with matching title
   from the project array */
function setDeleteEvent(button, title) {
  button.addEventListener('click', () => {
    deleteProject(title);
  });
}

/* delete project with matching title from array */
function deleteProject(title) {
  let projectList = getLocalProjects();
  let index;

  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].getTitle() === title) {
      index = i;
    }
  }

  projectList.splice(index, 1);
  renderProjectList();

  // if project is not empty set last project to active
  if (projectList.length > 0) {
    setProjectActive(projectList[projectList.length - 1].getTitle())
  } else {
    renderTodoList();
  }
}

export { addProjectElement };