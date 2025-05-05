import revalidate from "../lib/actions/action1";

type Todo = {
  id: number;
  title: string;
  description: string;
};

export default async function Blog() {
  const res = await fetch("<https://sum-server.100xdevs.com/todos>", {
    next: { tags: ["todos"] },
  });

  const data = await res.json();
  const todos = data.todos;
  revalidate()

  console.log("todos :", todos);
  return (
    <div>
      {todos.map((todo: Todo) => {
        <div key={todo.id}>
          {todo.title}
          {todo.description}
        </div>;
      })}
    </div>
  );
}
