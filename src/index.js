import {Todo} from './todo';
import {Project} from './project'

let todo = Todo('title', 'des', 'due', 'p');
let todo2 = Todo('title2', 'des2', 'due2', 'p2');
let todo3 = Todo('title3', 'des3', 'due3', 'p3');

let todoList = [];
todoList.push(todo);
todoList.push(todo2);

let project = Project(todoList);
project.addTodo(todo3);
for (todo of project.getTodoList()) {
    console.log(todo.getTitle());
}

console.log(project.getTodo(2).getTitle());