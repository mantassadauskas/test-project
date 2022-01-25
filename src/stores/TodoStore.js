import { action, computed, makeObservable, observable } from "mobx"

class TodoStore {
    list = [];
    id = 0;

    constructor(value) {
        makeObservable(this, {
            list: observable,
            addTodo: action,
            removeTodo: action,
            getTodos: computed
        })
        this.list = value
    }


    addTodo(value) {
        this.list.push({ id: this.id++, value })
        console.log(this.list);
    }

    removeTodo(id) {
        const index = this.list.findIndex(todo => todo.id === id);
        if (index > -1) {
            this.list.splice(index, 1)
        }
    }

    getTodos() {
        return this.list
    }

}

export const todoStore = new TodoStore();