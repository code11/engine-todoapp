import { testProducer } from '../../../../test'
import { checkListItem } from './checkListItem'

jest.useFakeTimers();

// @ts-ignore
describe('checkListItem', () => {
  test("Guard action doesn't exist", () => {
    testProducer({
      producer: checkListItem, 
      presets: {},
      expectations: {
        resetAction: {
          set: []
        },
        updateList: {
          set: []
        }
      }
    })
  });
  
  test("Guard action type is not check or uncheck", () => {
    testProducer({
      producer: checkListItem, 
      presets: {
        action: {
          type: 'not check or uncheck'
        }
      },
      expectations: {
        resetAction: {
          set: []
        },
        updateList: {
          set: []
        }
      }
    })
  });
  
  test("List item is checked", () => {
    testProducer({
      producer: checkListItem, 
      presets: {
        action: {
          type: 'check',
          value: 'first'
        },
        listGetter: {
          first: {
            completed: false
          },
          second: {
            completed: true
          }
        }
      },
      expectations: {
        resetAction: {
          set: [
            {
                type: undefined,
                value: undefined,
            }
          ]
        },
        updateList: {
          set: [
            {
              first: {
                completed: true
              },
              second: {
                completed: true
              }
            }
          ]
        }
      }
    })
  });

  test("List item is unchecked", () => {
    testProducer({
      producer: checkListItem, 
      presets: {
        action: {
          type: 'uncheck',
          value: 'first'
        },
        listGetter: {
          first: {
            completed: true
          },
          second: {
            completed: true
          }
        }
      },
      expectations: {
        resetAction: {
          set: [
            {
              type: undefined,
              value: undefined,
            }
          ]
        },
        updateList: {
          set: [
            {
              first: {
                completed: false
              },
              second: {
                completed: true
              }
            }
          ]
        }
      }
    })
  });
})
