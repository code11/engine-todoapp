import TodoList from './index'
import Test from '../../../../Test'

jest.useFakeTimers();

describe('TodoList view', () => {
  Test.view('no list', {
    state: {
      todo: {
        byId: {

        }
      }
    },
    View: TodoList,
    props: { icons: {}}
  });

  Test.view('items in list', {
    state: {
      todo: {
        byId: {
          id00: {
            id:'id00',
            title:'React Engine',
            completed: false,
            description: "learn react engine",
          },
          id01: {
            id:'id01',
            title:'Lorem Ipsum',
            completed: false,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          id02: {
            id:'id02',
            title:'Node Engine',
            completed: false,
            description: "learn node engine",
          },
          id03: {
            id:'id03',
            title:'Node Engine',
            completed: false,
            description: "dsadsd\nsadasd\nasdasd",
          },
        }
      }
    },
    View: TodoList,
    props: { icons: {}}
  });

  Test.view('items one item in list', {
    state: {
      todo: {
        byId: {
          id00: {
            id:'id00',
            title:'React Engine',
            completed: false,
            description: "learn react engine and much more but you will never guess how easy it is to test",
          } 
        }
      }
    },
    View: TodoList,
    props: { icons: {}}
  });

  Test.view('items one item in list completed', {
    state: {
      todo: {
        byId: {
          id00: {
            id:'id00',
            title:'React Engine',
            completed: true,
            description: "learn react engine and much more but you will never guess how easy it is to test",
          } 
        }
      }
    },
    View: TodoList,
    props: { icons: {}}
  });
})
