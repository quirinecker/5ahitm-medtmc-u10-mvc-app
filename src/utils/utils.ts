import todoStore from "../store/todoStore";

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export async function loadTodos() {
  const response = await fetch('http://localhost:3000/todos')
  todoStore.update(await response.json())
}
