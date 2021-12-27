import { createAction, props } from '@ngrx/store';

export enum AppActionTypes {
  GAMEOBJ_READY = '[GameObj API Ready]',
  GAMEOBJ_REQUEST = '[GameObj API Request]',
  GAMEOBJ_FAILURE = '[GameObj API Failure]',
  GAMEOBJ_RECEIVED = '[GameObj API Received]'
}

export const GameObjReadyAction   = createAction( AppActionTypes.GAMEOBJ_READY );
export const GameObjRequestAction   = createAction( AppActionTypes.GAMEOBJ_REQUEST );
export const GameObjFailureAction   = createAction( AppActionTypes.GAMEOBJ_FAILURE, props<{ payload:  { error: string}}>() );
export const GameObjCompleateAction = createAction( AppActionTypes.GAMEOBJ_RECEIVED, props<{ payload: { result: Array<any>}}>() );

 