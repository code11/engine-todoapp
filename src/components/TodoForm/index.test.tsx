import TodoForm from './index';

const [stateProducer] = TodoForm.producers

jest.useFakeTimers();

// @ts-ignore
describe('stateProducer', () => {
  test("Guard stateProducer no form", () => {
    const form = undefined
  
    const updateState = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    stateProducer.fn({
      form,
      updateState
    })
  
    jest.runAllTimers()
  
    expect(updateState.set.mock.calls.length).toBe(0)
  });
  
  test("Component stateProducer state initiates on new form", () => {
    const form = {
  
    }
  
    const updateState = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    stateProducer.fn({
      form,
      updateState
    })
  
    jest.runAllTimers()
  
    expect(updateState.set.mock.calls.length).toBe(1)
    expect(updateState.set.mock.calls[0][0]).toMatchObject({data: {
      title: "",
      description: "",
      completed: false,
      id: expect.any(String)
    }})
  
  });
  
  test("Component stateProducer state initiates on edit form", () => {
    const form = {
      type: 'edit',
      data: {
        title: "test",
        description: "description",
        completed: false,
        id: "123"
      }
    }
  
    const updateState = {
      set: jest.fn(),
      remove: jest.fn(),
      merge: jest.fn()
    }
  
    stateProducer.fn({
      form,
      updateState
    })
  
    jest.runAllTimers()
  
    expect(updateState.set.mock.calls.length).toBe(1)
    expect(updateState.set.mock.calls[0][0]).toMatchObject({data: form.data})
  });
})