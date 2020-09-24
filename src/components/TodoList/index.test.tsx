import TodoList from './index';
import testFramework from '../../test'

const [deleteListItem, checkListItem, editListItem] = TodoList.producers

jest.useFakeTimers();

// @ts-ignore

describe('deleteListItem', () => {
  test("Guard action doesn't exist", () => {
    testFramework.testifyProducer({
      producer: deleteListItem, 
      presets: {},
      expectations: {
        resetAction: {
          set: {
            count: 0
          }
        },
        updateList: {
          set: {
            count: 0
          }
        }
      }
    })
  });
  
  test("Guard action type is not delete", () => {
    testFramework.testifyProducer({
      producer: deleteListItem, 
      presets: {
        action: {
          type: 'not delete'
        }
      },
      expectations: {
        resetAction: {
          set: {
            count: 0
          }
        },
        updateList: {
          set: {
            count: 0
          }
        }
      }
    })
  });
  
  test("List item is deleted", () => {
    testFramework.testifyProducer({
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
          set: {
            count: 1,
            equal: {
              type: undefined,
              value: undefined
            }
          }
        },
        updateList: {
          set: {
            count: 1,
            equal: {
              second: {}
            }
          }
        }
      }
    })
  });
})

describe('checkListItem', () => {
  test("Guard action doesn't exist", () => {
    testFramework.testifyProducer({
      producer: checkListItem, 
      presets: {},
      expectations: {
        resetAction: {
          set: {
            count: 0
          }
        },
        updateList: {
          set: {
            count: 0
          }
        }
      }
    })
  });
  
  test("Guard action type is not check or uncheck", () => {
    testFramework.testifyProducer({
      producer: checkListItem, 
      presets: {
        action: {
          type: 'not check or uncheck'
        }
      },
      expectations: {
        resetAction: {
          set: {
            count: 0
          }
        },
        updateList: {
          set: {
            count: 0
          }
        }
      }
    })
  });
  
  test("List item is checked", () => {
    testFramework.testifyProducer({
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
          set: {
            count: 1,
            equal: {
              type: undefined,
              value: undefined,
            }
          }
        },
        updateList: {
          set: {
            count: 1,
            equal: {
              first: {
                completed: true
              },
              second: {
                completed: true
              }
            }
          }
        }
      }
    })
  });

  test("List item is unchecked", () => {
    testFramework.testifyProducer({
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
          set: {
            count: 1,
            equal: {
              type: undefined,
              value: undefined,
            }
          }
        },
        updateList: {
          set: {
            count: 1,
            equal: {
              first: {
                completed: false
              },
              second: {
                completed: true
              }
            }
          }
        }
      }
    })
  });
})

describe('editListItem', () => {
  test("Guard action doesn't exist", () => {
    testFramework.testifyProducer({
      producer: editListItem, 
      presets: {},
      expectations: {
        resetAction: {
          set: {
            count: 0
          }
        },
        updateMode: {
          set: {
            count: 0
          }
        }
      }
    })
  });
  
  test("Guard action type is not edit", () => {
    testFramework.testifyProducer({
      producer: editListItem, 
      presets: {
        action: {
          type: 'not edit'
        }
      },
      expectations: {
        resetAction: {
          set: {
            count: 0
          }
        },
        updateMode: {
          set: {
            count: 0
          }
        }
      }
    })
  });
  
  test("List item is edited", () => {
    testFramework.testifyProducer({
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
          set: {
            count: 1,
            equal: {
              type: undefined,
              value: undefined,
            }
          }
        },
        updateMode: {
          set: {
            count: 1,
            equal: {
              data: {
                completed: false
              },
              type: 'edit'
            }
          }
        }
      }
    })
  });
})