import { Observe } from '@c11/engine.macro';
import R from 'ramda'

class Engine {
    // // private state: object;
    // private cookedState: object;

    // public Get:object;
    // public Observe:object;
    // public Update:object;

    // private cook(path: Array<any>, state: object) {
    //     const obj = {}

    //     Object.keys(state)
    //     .forEach(key => {
    //         if(state[key] instanceof Array) {
    //             obj[key] = state[key].map((val, index) => {
    //                return this.cook(path.concat([key, index]), obj[key])
    //             })
    //             return
    //         }

    //         if(state[key] instanceof Object) {
    //             obj[key] = this.cook(path.concat([key]), obj[key])
    //             return
    //         }

    //         obj[key] = {

    //         }
    //     })

    //     return obj
    // }

    // constructor(state: object) {
    //     // this.state = state;
    //     this.cookedState = this.cook([], state)
    //     this.Observe = state
    // }

    // // public Update() {
    // //     return {
    // //         set: jest.fn(),
    // //         remove: jest.fn(),
    // //         merge: jest.fn()
    // //     }
    // // }

}

export default Engine;