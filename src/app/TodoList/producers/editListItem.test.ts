import Test from '../../../../Test'
import { editListItem } from './editListItem'

// @ts-ignore
describe('editListItem', () => {
  Test.producer("Guard action doesn't exist", {
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
  
  Test.producer("Guard action type is not edit", {
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
  
  Test.producer("List item is edited", {
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
})