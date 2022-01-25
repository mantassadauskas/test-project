import { todoStore } from "../stores/TodoStore";
import React from "react";

export class Card extends React.PureComponent {
    inputValue = '';
    list = todoStore.getTodos();

    handleClick = () => {
        todoStore.addTodo(this.inputValue)
    }

    handleChange = (event) => {
        this.inputValue = event.target.value
    }

    render() {
        return (
            <div>
                <input placeholder={ 'enter value' } onChange={ this.handleChange }/>
                <button type={ 'submit' } onClick={ this.handleClick }>Submit</button>

                { this.list.map(item => (<div>{ item.id } | { item.value }</div>)) }
            </div>
        )
    }
}
