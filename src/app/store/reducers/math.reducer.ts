import { MathActions, MathActionTypes } from '../actions/math.actions';

export interface State {
  currentNumber?: number;
}

export const initialState: State = {
  currentNumber: null
};

export function reducer(state = initialState.currentNumber, action: MathActions) {
  switch (action.type) {

    case MathActionTypes.IncreaseNumber:
      return state * 2;

    case MathActionTypes.DivideNumber:
      return (state / 3).toFixed(2);

    case MathActionTypes.EnterNumber:
      return action.payload;

    default:
      return state;
  }
}
