import { producer, Observe, Path, Update, Get } from "@c11/engine.macro";

export const checkListItem: producer = ({
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