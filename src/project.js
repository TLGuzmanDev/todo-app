// A project consist of many todo items
// import {Todo} from './todo';

const Project = (title, todoList) => {
    let id = createID();
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle; 
    const getTodoList = () => todoList;
    const getTodo = (index) => todoList[index];
    const addTodo = (todo) => todoList.push(todo);
    const getID = () => id;

    return {
        getTitle,
        setTitle,
        getTodoList,
        getTodo,
        addTodo,
        getID,
    };
};

function createID() {
  return Math.floor(Math.random() * Date.now());
}

export { Project } ;