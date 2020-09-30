import React from "react";
import { view, Observe, Update } from "@c11/engine.macro";
import TodoList from "./TodoList/components";
import TodoForm from "./TodoForm/components";
import Grid from "@material-ui/core/Grid";

const App: view = ({
  mode = Observe.mode,
  todos = Update.todo.byId,
  newMode = Update.mode,
}) => {
  const formHandler = (data) => {
    todos.merge({ [data.id]: data });
    newMode.set({ type: "list", data: {} });
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Engine ToDo App</h1>
      {mode.type === "list" && <TodoList />}
      {["edit", "new"].includes(mode.type) && (
        <TodoForm handler={formHandler} form={mode} />
      )}
    </Grid>
  );
};

export default App;
