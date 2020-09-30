import {
  producer,
  Update
} from "@c11/engine.macro";

export const stateProducer: producer = ({
  form,
  updateState = Update.todoForm,
  randomFloat = Math.random
}) => {
    if(!form) return
    
    let state = {
      title: "",
      description: "",
      completed: false,
      id: randomFloat().toString(36).substring(7),
    };
    if (form.type === "edit") {
      state = form.data;
    }
    updateState.set({ data: state });
  };