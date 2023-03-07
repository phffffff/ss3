import { v4 as uuidv4, v4 } from 'uuid';

const initState = {
    todoList: [
        { id: 1, name: 'task-1', done: false },
        { id: 2, name: 'task-2', done: true },
        { id: 3, name: 'task-3', done: false },
        { id: 4, name: 'task-4', done: true },
    ]
}

const todoReducer = (state = initState, action) => {
    let newTodoList = [];
    let newCurrentTodo = {};
    switch (action.type) {
        case "ADD_TODO":
            newCurrentTodo = {
                id: v4(),
                name: action.payload,
                done: false,
            }
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    newCurrentTodo,
                ]
            };

        case "DEL_TODO":
            newTodoList = state.todoList && state.todoList.length && state.todoList.filter((item) => item.id !== action.payload);

            return {
                ...state,
                todoList: [
                    ...newTodoList
                ]
            };

        case "CHECK_TODO":
            newTodoList = [...state.todoList];
            if (newTodoList) {
                let idx = newTodoList && newTodoList.length && newTodoList.findIndex((item) => item.id === action.payload);


                newTodoList[idx].done = !newTodoList[idx].done;
            }
            return {
                ...state,
                todoList: [
                    ...newTodoList,
                ]
            };

        case "EDIT_TODO":
            let { id, name } = action.payload;
            console.log(id)
            newTodoList = [];

            state.todoList && state.todoList.length && state.todoList.forEach((item) => {
                if (item.id === id) {
                    item.name = name;
                }
                newTodoList = [...newTodoList, item]
            });
            return {
                todoList: [...newTodoList]
            }

        default:
            return { ...state }
    }
};

export default todoReducer;