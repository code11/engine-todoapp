import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ActionIcons from "../../components/ActionIcons";
import { view, producer, Observe, Path, Update, Get } from "@c11/engine.macro";

const TodoList: view = ({ list = Observe.todo.byId, mode = Update.mode }) => {
  return (
    <>
      <List>
        {Object.keys(list).map((id) => {
          const actions = {
            checkIcon: true,
            uncheckIcon: false,
            deleteIcon: true,
            editIcon: true,
          };
          if (list[id].completed === true) {
            actions.uncheckIcon = true;
            actions.checkIcon = false;
          }
          return (
            <ListItem key={id}>
              <Box width={3 / 4} minWidth={"400px"}>
                <ListItemText primary={list[id].description} />
              </Box>
              <Box width={1 / 4} minWidth={"150px"}>
                <ActionIcons
                  icons={actions}
                  path={Path.todo.action}
                  triggerValue={id}
                />
              </Box>
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => mode.set({ type: "new", data: {} })}
      >
        Add todo
      </Button>
    </>
  );
};
const deleteListItem: producer = ({
  action = Observe.todo.action,
  resetAction = Update.todo.action,
  updateList = Update.todo.byId,
  listGetter = Get.todo.byId,
}) => {
  if (!action) return
  if (action.type !== "delete") return;
  const list = listGetter();
  delete list[action.value];
  updateList.set(list);
  resetAction.set({
    type: undefined,
    value: undefined,
  });
};
const checkListItem: producer = ({
  action = Observe.todo.action,
  resetAction = Update.todo.action,
  updateList = Update.todo.byId,
  listGetter = Get.todo.byId,
}) => {
  if (!action) return
  if (!["check", "uncheck"].includes(action.type)) return;
  const list = listGetter();
  Object.assign(list[action.value], {
    completed: action.type === "check" ? true : false,
  });
  updateList.set(list);
  resetAction.set({
    type: undefined,
    value: undefined,
  });
};

const editListItem: producer = ({
  action = Observe.todo.action,
  resetAction = Update.todo.action,
  updateMode = Update.mode,
  listGetter = Get.todo.byId,
}) => {
  if (!action) return
  if (action.type !== "edit") return;
  updateMode.set({
    type: "edit",
    data: {
      ...listGetter()[action.value],
    },
  });
  resetAction.set({
    type: undefined,
    value: undefined,
  });
};
TodoList.producers = [deleteListItem, checkListItem, editListItem];

export default TodoList;
