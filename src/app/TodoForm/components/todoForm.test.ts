import TodoForm from './index'
import Test from '../../../../Test'

describe('TodoForm view', () => {
  Test.view('no form', {
    state: {
      todoForm: {}
    },
    View: TodoForm,
    props: {}
  });

  Test.view('empty form', {
    state: {
      todoForm: {
        data: {}
      }
    },
    View: TodoForm,
    props: {}
  });

  Test.view('form title', {
    state: {
      todoForm: {
        data: {
          title: "test"
        }
      }
    },
    View: TodoForm,
    props: {}
  }); 
   
  Test.view('form description', {
    state: {
      todoForm: {
        data: {
          description: "description"
        }
      }
    },
    View: TodoForm,
    props: {}
  });
})
