import { testProducer } from '../../../../test'
import { editListItem } from './editListItem'

jest.useFakeTimers();

// @ts-ignore
describe('editListItem', () => {
  test("Guard action doesn't exist", () => {
    testProducer({
      producer: editListItem, 
      presets: {},
      expectations: {
        resetAction: {
          set: []
        },
        updateMode: {
          set: []
        }
      }
    })
  });
  
  test("Guard action type is not edit", () => {
    testProducer({
      producer: editListItem, 
      presets: {
        action: {
          type: 'not edit'
        }
      },
      expectations: {
        resetAction: {
          set: []
        },
        updateMode: {
          set: []
        }
      }
    })
  });
  
  test("List item is edited", () => {
    testProducer({
      producer: editListItem, 
      presets: {
        action: {
          type: 'edit',
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
        updateMode: {
          set: [
            {
              data: {
                completed: false
              },
              type: 'edit'
            }
          ]
        }
      }
    })
  });
})