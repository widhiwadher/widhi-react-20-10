import {createStore  } from "redux";

 function Reducer (state = {}, action ) {

    switch (action.type) {
        case 'Add' : Object.keys(action).map(key => state [key] = action [key]);
        return state;

        case 'Remove' : delete state [action.name];
        return state ;

        default :
        return state ;

    }

}

export default createStore ;