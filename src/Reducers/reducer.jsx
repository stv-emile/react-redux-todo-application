import { ADD_TODO, REMOVE_TODO, MARK_AS_DONE } from "../Actions/action";

//etat initiale avec une liste de todo vide
const initialState = {
  todos: [],
};

//prend en parametre le state  et un action . le state par defaut est le state initial
const reducer = (state = initialState, action) => {
  //on verfie le type  d'action en parametre
  switch (action.type) {

    //si c'est un Add todo il returne un  objet qui contient un tableau tableau todo ayant : 
    // le tableau des todo du state et un nouveau objet ayant un id:
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            isDone: action.payload.isDone,
            task: action.payload.task,
          },
        ],
      };

    case MARK_AS_DONE:
      return {
        todos: [...state.todos.map((todo) => todo.id !== action.payload ? todo : {id: todo.id, isDone: !todo.isDone, task: todo.task})],
      };

    case REMOVE_TODO:
      return {
        todos: [...state.todos.filter((todo) => (todo.id !== action.payload || todo.isDone === false ))],
      }; 

    default:
      return state;
  }
};

export default reducer;
