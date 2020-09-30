import { testProducer } from '../../../../test'
import { deleteListItem } from './deleteListItem'

jest.useFakeTimers();

// @ts-ignore
describe('deleteListItem', () => {
  test("Guard action doesn't exist", () => {
    testProducer({
      producer: deleteListItem, 
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
  
  test("Guard action type is not delete", () => {
    testProducer({
      producer: deleteListItem, 
      presets: {
        action: {
          type: 'not delete'
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
  
  test("List item is deleted", () => {
    testProducer({
      producer: deleteListItem, 
      presets: {
        action: {
          type: 'delete',
          value: 'first'
        },
        listGetter: {
          first: {},
          second: {}
        }
      },
      expectations: {
        resetAction: {
          set: [
            {
              type: undefined,
              value: undefined
            }
          ]
        },
        updateList: {
          set: [
            {
              second: {}
            }
          ]
        }
      }
    })
  });
})
