// A project consist of many todo items
// import {Todo} from './todo';

const Project = (title, todoList) => {
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle; 
    const getTodoList = () => todoList;
    const getTodo = (index) => todoList[index];
    const addTodo = (todo) => todoList.push(todo);

    return {
        getTitle,
        setTitle,
        getTodoList,
        getTodo,
        addTodo,
    };
};

export { Project } ;