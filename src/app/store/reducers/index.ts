import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
// import { environment } from '../../../environments/environment';
import * as fromMath from './math.reducer';

export interface State {
  currentNumber: number;
}

export const reducers: ActionReducerMap<State> = {
  currentNumber: fromMath.reducer
};

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
