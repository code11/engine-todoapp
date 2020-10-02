import Test from '../../../../Test'
import { stateProducer } from "./stateProducer";

// @ts-ignore
describe('stateProducer', () => {
  Test.producer("Guard stateProducer no form", {
    producer: stateProducer, 
    presets: {},
    expectations: {
      updateState: []
    }
  })

  Test.producer("Component stateProducer state initiates on new form", {
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
  
  Test.producer("Component stateProducer state initiates on edit form", {
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
})