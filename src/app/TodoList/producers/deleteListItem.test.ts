import Test from '../../../../Test'
import { deleteListItem } from './deleteListItem'

// @ts-ignore
describe('deleteListItem', () => {
  Test.producer("Guard action doesn't exist", {
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
  
  Test.producer("Guard action type is not delete", {
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
  
  Test.producer("List item is deleted", {
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
})
