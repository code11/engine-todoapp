import Test from '../../../../Test'
import { checkListItem } from './checkListItem'

// @ts-ignore
describe('checkListItem', () => {
  Test.producer("Guard action doesn't exist", {
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
  
  Test.producer("Guard action type is not check or uncheck",{
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
  
  Test.producer("List item is checked", {
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

  Test.producer("List item is unchecked", {
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
})
