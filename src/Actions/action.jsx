export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_AS_DONE = "MARK_AS_DONE";

//ces deux actions sont géré par les reducers

//pour creer une tache en donnant l'objet todo que l'on met dans l'objet tache
export const addTodo = (id, isDone, todo) => {
  let task = {
    id: id,
    isDone: isDone,
    task: todo,
  };

  return {
    type: ADD_TODO,
    payload: task,
  };
};

//pour supprimer la tache en donnant sont id
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

//pour marquer comme fait
export const markAsDone = (id) =>{
  return {
    type: MARK_AS_DONE,
    payload: id,
  };
}
