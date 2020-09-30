import { view, producer, Observe, Path, Update, Get } from "@c11/engine.macro";

export const deleteListItem: producer = ({
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