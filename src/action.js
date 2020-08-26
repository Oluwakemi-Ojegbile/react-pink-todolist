export const addTodo = payload => {
    return {
        type: "ADD_TODO",
        payload
    };
};

export const deleteTodo = id => {
    return {
        type: "DELETE_TODO",
        id
    }
}