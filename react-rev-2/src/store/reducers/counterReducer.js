import * as ActionTypes from "../actions/counterActions";

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  console.log("action", action.type,action.payload,ActionTypes.INCREMENT_BY);
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        counter: state.counter - 1,
      };
    case ActionTypes.INCREMENT_BY:
      console.log("payload", action.payload);
      return {
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
}

export default counterReducer;