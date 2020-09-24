import TodoForm from './index';
import testFramework from '../../test'

const [stateProducer] = TodoForm.producers

jest.useFakeTimers();

// @ts-ignore
describe('stateProducer', () => {
  test("Guard stateProducer no form", () => {
    testFramework.testifyProducer({
      producer: stateProducer, 
      presets: {},
      expectations: {
        updateState: {
          set: {
            count: 0
          }
        }
      }
    })
  });
  
  test("Component stateProducer state initiates on new form", () => {
    testFramework.testifyProducer({
      producer: stateProducer, 
      presets: {
        form: {}
      },
      expectations: {
        updateState: {
          set: {
            count: 1,
            match: {
              data: {
                title: "",
                description: "",
                completed: false,
                id: expect.any(String)
              }
            }
          }
        }
      }
    })  
  });
  
  test("Component stateProducer state initiates on edit form", () => {
    testFramework.testifyProducer({
      producer: stateProducer, 
      presets: {
        form: {
          type: 'edit',
          data: {
            title: "test",
            description: "description",
            completed: false,
            id: "123"
          }
        }
      },
      expectations: {
        updateState: {
          set: {
            count: 1,
            match: {
              data: {
                title: "test",
                description: "description",
                completed: false,
                id: "123"
              }
            }
          }
        }
      }
    })  
  });
})