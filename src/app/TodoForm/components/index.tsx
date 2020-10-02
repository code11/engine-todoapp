import React from "react";
import {
  view,
  producer,
  Observe,
  Path,
  Update,
  Get,
  Prop,
} from "@c11/engine.macro";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as producers from '../producers'

const TodoForm: view = ({
  formData = Observe.todoForm.data,
  updateTitle = Update.todoForm.data.title,
  updateDescripton = Update.todoForm.data.description,
  updateFiles = Update.todoForm.data.files,
  handler,
}) => {
  if (!formData) return <></>;
  return (
    <Box width="50%">
      <FormControl fullWidth>
        <TextField
          label="Title"
          value={formData.title}
          onChange={(event) => {
            updateTitle.set(event.target.value);
          }}
        />
        <TextField
          label="Description"
          value={formData.description}
          onChange={(event) => {
            updateDescripton.set(event.target.value);
          }}
        />
        <Input
          disableUnderline
          type="file"
          onChange={(event) => {
            updateFiles.set(event.target.files);
          }}
        ></Input>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handler(formData)}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

// @ts-ignore
TodoForm.producers = Object.values(producers);

export default TodoForm;
