import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ApiService } from "../core/services/api/api.service";
import { serializeError } from 'serialize-error';
import * as AppActions from './app.action';

@Injectable()
export class AppEffects {

 
    constructor(
        private apiService: ApiService,
        private actions$: Actions
    ) {}
 
    loadGameObj$ = createEffect(() => this.actions$.pipe(
        ofType( AppActions.GameObjRequestAction ),
        mergeMap(() => this.apiService.getToket()
          .pipe(
            map(res => ( this.mapResponseCode(res) ) ),
            catchError((error) => of(this.handleError(error) ))
          ))
        )
    );
    

    private mapResponseCode(res:any): any {
        switch(res.response_code) {
            case  0: {
                return AppActions.GameObjCompleateAction({
                    payload: {
                        result: res.results
                    }
                })
            }
 
            //TODO an error object ErrorResponseCode(error.code)
            // case TriviaApiResponseCode.NoResults: {
                
            //     return this.handleTokenSessionError(TriviaSessionStatus.NoResults)
            // }
            // case TriviaApiResponseCode.InvalidParameter: {

            //     return this.handleTokenSessionError(TriviaSessionStatus.InvalidParameter)
            // }
            // case TriviaApiResponseCode.TokenNotFound: {

            //     return this.handleTokenSessionError(TriviaSessionStatus.TokenNotFound)
            // }
            // case TriviaApiResponseCode.TokenEmpty: {

            //     return this.handleTokenSessionError(TriviaSessionStatus.TokenEmpty)
            // }
        }
    }
 
    
    private handleError(error: any) {
        const friendlyErrorMessage = serializeError(error).message;

        return AppActions.GameObjFailureAction({
            payload: { 
                error: friendlyErrorMessage
            }
        });
    }
}