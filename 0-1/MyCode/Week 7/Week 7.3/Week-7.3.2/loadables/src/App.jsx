import "./App.css";
import {
  RecoilRoot,
  useRecoilValueLoadable,
  useRecoilStateLoadable,
} from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // Another way Suspense, ErrorBoundary

  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  // {
  //   content:
  //   state:
  // }
  console.log(todo.state);
  if (todo.state === "loading") {
    return <div>loading...</div>;
  } else if (todo.state == "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    );
  } else if (todo.state == "hasError") {
    return <div>Error while getting data from Backend</div>;
  }
}

export default App;
