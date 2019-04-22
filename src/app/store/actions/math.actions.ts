import { Action } from '@ngrx/store';

export enum MathActionTypes {
  IncreaseNumber = '[Math] Increase number',
  DivideNumber = '[Math] Divide number',
  EnterNumber = '[Math] Enter number',
}

export class IncreaseNumber implements Action {
  readonly type = MathActionTypes.IncreaseNumber;
}

export class DivideNumber implements Action {
  readonly type = MathActionTypes.DivideNumber;
}

export class EnterNumber implements Action {
  readonly type = MathActionTypes.EnterNumber;
  constructor(public payload: any) {}
}


export type MathActions = IncreaseNumber | DivideNumber | EnterNumber;
