// A todo item

const Todo = (title, description, dueDate, priority) => {
    let date = getDate();
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => date;
    const getPriority = () => priority;

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDate) => date = newDate;
    const setPriority = (newPriority) => priority = newPriority;

    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
    };
};

function getDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return `${year}-${addLeadingZero(month)}-${addLeadingZero(day)}`;
}

function addLeadingZero(n) {
  return (n < 10) ? '0' + n : '' + n;
}

export { Todo };