import { createReducer, on } from "@ngrx/store";
import {  initialAppState } from "./app.state";
import * as AppAction from './app.action';
import { GameObject, GameObjectStatus } from "./game/game.state";
 
export const appReducer = createReducer(
    initialAppState,

    on( AppAction.GameObjRequestAction, (state) => ({
        ...state,    
        game: {
                status: GameObjectStatus.Requested,
                gameList: []
            }
        }
    )),
    on( AppAction.GameObjReadyAction, (state) => ({
            ...state,
            game: {
                status: GameObjectStatus.Ready,
                gameList: []
            }
            
        }
    )),
    on( AppAction.GameObjCompleateAction, (state, action: any)  => {

            const newState: Array<GameObject> = new Array<GameObject>();
            // const newGameObj = {
            //     status: GameObjectStatus.Completed,
            //     category: action.category,
            //     type: action.type,
            //     question: action.question,
            //     difficulty: action.difficulty,
            //     incorrect_answers: action.incorrect_answers,
            //     correct_answer: action.correct_answer
            // }
            newState.push(action.payload.result[0])

            return {
                ...state,
                game: {
                    status: GameObjectStatus.Completed,
                    gameList: newState
                }
            }
        }
    ),

 
    // on( AppAction.GameObjCompleateAction, (state, action: any) => 
    // (
    //     {
    //         ...state,
    //         game: [{
    //             category: action.category,
    //             type: action.type,
    //             question: action.question,
    //             difficulty: action.difficulty,
    //             incorrect_answers: action.incorrect_answers,
    //             correct_answer: action.correct_answer,
    //             status: GameObjectState.Completed
    //         }
    //     }
    // )),
    // on( AppAction.GameObjFailureAction, (state, payload: any ) => 
    // (
    //     {
    //         ...state,
    //         game: {
    //             status: GameObjectState.Failed,
    //             responseMsg: payload.error
    //         }
    //     }
    // )),
 

    
)