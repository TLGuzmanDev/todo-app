// A todo item

const Todo = (title) => {
  let date = getDate();
  let description = '';
  let priority;

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => date;
  const getPriority = () => priority;
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDate) => (date = newDate);
  const setPriority = (newPriority) => (priority = newPriority);

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
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${year}-${addLeadingZero(month)}-${addLeadingZero(day)}`;
}

function addLeadingZero(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default Todo;
