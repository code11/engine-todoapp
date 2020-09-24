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
                        if(expectations[key][verb].count) {
                            expect(mockMap[key][verb].mock.calls.length).toBe(expectations[key][verb].count)
                        }
                        if(expectations[key][verb].match) {
                            expect(mockMap[key][verb].mock.calls[0][0]).toMatchObject(expectations[key][verb].match)
                        }
                        if(expectations[key][verb].equal) {
                            expect(mockMap[key][verb].mock.calls[0][0]).toEqual(expectations[key][verb].equal)
                        }
                    })
                    break;
                default:
                    break;
            }
        })
    }
}

export default testFramework