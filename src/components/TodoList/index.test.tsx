import TodoList from './index';

const [deleteListItem, checkListItem, editListItem] = TodoList.producers

jest.useFakeTimers();

// @ts-ignore

describe('deleteListItem', () => {
  test("Guard action doesn't exist", () => {
    const action = undefined
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateList = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn()
  
    deleteListItem.fn({
      action,
      resetAction,
      updateList,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(resetAction.set.mock.calls.length).toBe(0)
    expect(updateList.set.mock.calls.length).toBe(0)
  });
  
  test("Guard action type is not delete", () => {
    const action = {
      type: 'not delete'
    }
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateList = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn()
  
    deleteListItem.fn({
      action,
      resetAction,
      updateList,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(resetAction.set.mock.calls.length).toBe(0)
    expect(updateList.set.mock.calls.length).toBe(0)
  });
  
  test("List item is deleted", () => {
    const action = {
      type: 'delete',
      value: 'first'
    }
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateList = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn().mockReturnValueOnce({
      first: {},
      second: {}
    })
  
    deleteListItem.fn({
      action,
      resetAction,
      updateList,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(updateList.set.mock.calls.length).toBe(1)
    expect(updateList.set.mock.calls[0][0]).toEqual({second: {}})
    expect(resetAction.set.mock.calls.length).toBe(1)
    expect(resetAction.set.mock.calls[0][0]).toEqual({
      type: undefined,
      value: undefined,
    })
  });
})

describe('checkListItem', () => {
  test("Guard action doesn't exist", () => {
    const action = undefined
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateList = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn()
  
    checkListItem.fn({
      action,
      resetAction,
      updateList,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(resetAction.set.mock.calls.length).toBe(0)
    expect(updateList.set.mock.calls.length).toBe(0)
  });
  
  test("Guard action type is not check or uncheck", () => {
    const action = {
      type: 'not check or uncheck'
    }
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateList = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn()
  
    checkListItem.fn({
      action,
      resetAction,
      updateList,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(resetAction.set.mock.calls.length).toBe(0)
    expect(updateList.set.mock.calls.length).toBe(0)
  });
  
  test("List item is checked", () => {
    const action = {
      type: 'check',
      value: 'first'
    }
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateList = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn().mockReturnValueOnce({
      first: {
        completed: false
      },
      second: {
        completed: true
      }
    })
  
    checkListItem.fn({
      action,
      resetAction,
      updateList,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(updateList.set.mock.calls.length).toBe(1)
    expect(updateList.set.mock.calls[0][0]).toEqual({
      first: {
        completed: true
      },
      second: {
        completed: true
      }
    })
    expect(resetAction.set.mock.calls.length).toBe(1)
    expect(resetAction.set.mock.calls[0][0]).toEqual({
      type: undefined,
      value: undefined,
    })
  });

  test("List item is unchecked", () => {
    const action = {
      type: 'uncheck',
      value: 'first'
    }
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateList = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn().mockReturnValueOnce({
      first: {
        completed: true
      },
      second: {
        completed: true
      }
    })
  
    checkListItem.fn({
      action,
      resetAction,
      updateList,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(updateList.set.mock.calls.length).toBe(1)
    expect(updateList.set.mock.calls[0][0]).toEqual({
      first: {
        completed: false
      },
      second: {
        completed: true
      }
    })
    expect(resetAction.set.mock.calls.length).toBe(1)
    expect(resetAction.set.mock.calls[0][0]).toEqual({
      type: undefined,
      value: undefined,
    })
  });
})

describe('editListItem', () => {
  test("Guard action doesn't exist", () => {
    const action = undefined
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateMode = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn()
  
    editListItem.fn({
      action,
      resetAction,
      updateMode,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(resetAction.set.mock.calls.length).toBe(0)
    expect(updateMode.set.mock.calls.length).toBe(0)
  });
  
  test("Guard action type is not edit", () => {
    const action = {
      type: 'not edit'
    }
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateMode = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const listGetter = jest.fn()
  
    editListItem.fn({
      action,
      resetAction,
      updateMode,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(resetAction.set.mock.calls.length).toBe(0)
    expect(updateMode.set.mock.calls.length).toBe(0)
  });
  
  test("List item is edited", () => {
    const action = {
      type: 'edit',
      value: 'first'
    }
  
    const resetAction = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    const updateMode = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }

    const list = {
      first: {
        completed: false
      },
      second: {
        completed: true
      }
    }
  
    const listGetter = jest.fn().mockReturnValueOnce(list)
  
    editListItem.fn({
      action,
      resetAction,
      updateMode,
      listGetter
    })
  
    jest.runAllTimers()
  
    expect(updateMode.set.mock.calls.length).toBe(1)
    expect(updateMode.set.mock.calls[0][0]).toEqual({
      data: list[action.value],
      type: 'edit'
    })
    expect(resetAction.set.mock.calls.length).toBe(1)
    expect(resetAction.set.mock.calls[0][0]).toEqual({
      type: undefined,
      value: undefined,
    })
  });
})