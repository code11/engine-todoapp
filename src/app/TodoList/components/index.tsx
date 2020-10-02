import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ActionIcons from "../../ActionIcons/components";
import { view, producer, Observe, Path, Update, Get } from "@c11/engine.macro";
import * as producers from '../producers'

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

// @ts-ignore
TodoList.producers = Object.values(producers);

export default TodoList;
