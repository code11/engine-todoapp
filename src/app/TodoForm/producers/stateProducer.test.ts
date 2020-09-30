import { FormatListNumbered } from '@material-ui/icons';
import { testProducer } from '../../../../test'
import { stateProducer } from "./stateProducer";

jest.useFakeTimers();

// @ts-ignore
describe('stateProducer', () => {
  test("Guard stateProducer no form", () => {
    testProducer({
      producer: stateProducer, 
      presets: {},
      expectations: {
        updateState: []
      }
    })
  });

  test("Component stateProducer state initiates on new form", () => {
    testProducer({
      producer: stateProducer, 
      presets: {
        form: {},
        randomFloat: () => 0.43434325
      },
      expectations: {
        updateState: {
          set: [
            {
              data: {
                title: "",
                description: "",
                completed: false,
                id: 'eczmz8'
              }
            }
          ]
        }
      }
    })  
  });
  
  test("Component stateProducer state initiates on edit form", () => {
    testProducer({
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
              data: {
                title: "test",
                description: "description",
                completed: false,
                id: "123"
              }
            }
          ]
        }
      }
    })  
  });
})