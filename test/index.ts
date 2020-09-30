expect.extend({
    toMatchExpectations(mockCalls, verbExpectations) {
        // const remainingExpectations = verbExpectations.slice(0)
        // const remainingMockCalls = mockCalls.slice(0)
    
        const isLonger = mockCalls.length !== verbExpectations.length

        if(isLonger) return {
            message: () => (`expected calls ${this.utils.printReceived(mockCalls)} to be same length as expectatio ${this.utils.printExpected(verbExpectations)}`),
            pass: false
        }

        let isSame: boolean = true
        for(let i = 0; i < mockCalls.length; i++) {
            if(verbExpectations[i].match) {
                expect(mockCalls[i][0]).toMatchObject(verbExpectations[i].match)
            }
            if(verbExpectations[i].equal) {
                expect(mockCalls[i][0]).toEqual(verbExpectations[i].equal)
            }
        }

        const pass = true
      
  
        if (pass) {
            return {
                message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
                pass: true
            }
        } else {
            return {
                message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
                pass: false
            }
        }
    }
  })

function permutations(xs: Array<object>): Array<Array<object>> {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = permutations(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
}

function isSatisfied(verbExpectations: Array<object>, mockCalls: Array<object>) {

    // expect(verbExpectations)

}

const testFramework = {
    testifyProducer({
        producer, 
        presets = {}, 
        expectations = {}
    }) {
        const args = producer.args.value
        const keys = Object.keys(args)
        const mockMap = {}
        keys.forEach(key => {
            switch(args[key].type) {
                case "OBSERVE":
                case "VALUE":
                    mockMap[key] = presets[key]
                    break
                case "GET":
                    const m = jest.fn()
                    m.mockReturnValue(presets[key])
                    mockMap[key] = m
                    break;
                case "UPDATE":
                    mockMap[key] = {
                        set: jest.fn(),
                        remove: jest.fn(),
                        merge: jest.fn()
                    }
                    break;
                default:
                    break;
            }
        })

        producer.fn(mockMap)
        jest.runAllTimers()

        keys.forEach(key => {
            switch(args[key].type) {
                case "UPDATE":
                    Object.keys(expectations[key])
                    .forEach(verb => {
                        expect(mockMap[key][verb].mock.calls).toMatchExpectations(expectations[key][verb])
                        // isSatisfied(expectations[key][verb], mockMap[key][verb].mock.calls)
                    })
                    break;
                default:
                    break;
            }
        })
    }
}

export default testFramework