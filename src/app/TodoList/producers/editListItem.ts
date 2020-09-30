import { producer, Observe, Path, Update, Get } from "@c11/engine.macro";

export const editListItem: producer = ({
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