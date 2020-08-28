import React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { view, Update, Prop } from "@c11/engine.macro";

const ActionIcons: view = ({
  triggerValue,
  icons,
  triggerAction = Update[Prop.path],
}) => {
  const handler = (action: string) => {
    return triggerAction.set({ type: action, value: triggerValue });
  };
  const { checkIcon, uncheckIcon, editIcon, deleteIcon } = icons;
  return (
    <ListItemSecondaryAction>
      {checkIcon && (
        <IconButton
          edge="end"
          aria-label="check"
          onClick={() => handler("check")}
        >
          <CheckCircleOutlineIcon />
        </IconButton>
      )}
      {uncheckIcon && (
        <IconButton
          edge="end"
          aria-label="uncheck"
          onClick={() => handler("uncheck")}
        >
          <CheckCircleIcon />
        </IconButton>
      )}
      {editIcon && (
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => handler("edit")}
        >
          <EditIcon />
        </IconButton>
      )}
      {deleteIcon && (
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handler("delete")}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </ListItemSecondaryAction>
  );
};

export default ActionIcons;
