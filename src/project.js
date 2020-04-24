// A project consist of many todo items
// import {Todo} from './todo';

const Project = (todoList) => {
    const getTodoList = () => todoList;
    const getTodo = (index) => todoList[index];
    const addTodo = (todo) => todoList.push(todo);

    return {
        getTodoList,
        getTodo,
        addTodo,
    };
};

export { Project } ;