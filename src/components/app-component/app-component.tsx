import {Component, h, State} from '@stencil/core';
import {loadTodos} from "../../utils/utils";
import todoStore from "../../store/todoStore";

@Component({
  tag: 'app-component',
  styleUrl: 'app-component.css',
  shadow: true,
})
export class AppComponent {

  @State() todos: string[] = []

  async componentWillLoad() {
    todoStore.data.subscribe(todos => {
      console.log("data incoming")
      console.log(this.todos)
      this.todos = todos
    })

    await loadTodos()
  }

  render() {
    return (
      <div>
        <h1>Todo - List</h1>

        <ul>
          {this.todos.map(todo =>
            <li>{todo}</li>
          )}
        </ul>
      </div>
    );
  }

}
