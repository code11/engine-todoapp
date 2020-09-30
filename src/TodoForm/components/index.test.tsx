import TodoForm from './index';
import testFramework from '../../../test'

const [stateProducer] = TodoForm.producers

jest.useFakeTimers();

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue({
    toString: (foo) => {
      return {
        substring(bar) {
          return '123'
        }
      }
    }
  });
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})

// @ts-ignore
describe('stateProducer', () => {
  test("Guard stateProducer no form", () => {
    testFramework.testifyProducer({
      producer: stateProducer, 
      presets: {},
      expectations: {
        updateState: []
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
          set: [
            {
              match: {
                data: {
                  title: "",
                  description: "",
                  completed: false,
                  id: expect.any(String)
                }
              }
            }
          ]
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
          set: [
            {
              match: {
                data: {
                  title: "test",
                  description: "description",
                  completed: false,
                  id: "123"
                }
              }
            }
          ]
        }
      }
    })  
  });
})