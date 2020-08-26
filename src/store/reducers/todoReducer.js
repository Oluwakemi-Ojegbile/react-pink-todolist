const initState = {
    todos: [
        {
          id: 1,
          title: 'Meet Dare at Noon',
          description: 'We are to meet on how to complete the React Tutorial!!!'
        },
        {
          id: 2,
          title: 'Meet Oreoluwa at Noon',
          description: 'We are to meet on how to complete the React Tutorial!!!'
        },
        {
          id: 3,
          title: 'Meet Oreoluwa at Noon',
          description: 'We are to meet on how to complete the React Tutorial!!!'
        }
      ]
}

const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_TODO":
          console.log(action)
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
            case "DELETE_TODO":
                return {
                    ...state,
                    todos: state.todos.filter(todo => {
                        return todo.id !== action.id;
                    })
                }
        default:
            return state;
    }
}

export default todoReducer;