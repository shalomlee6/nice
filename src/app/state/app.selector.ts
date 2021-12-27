import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { GameObject, GameObjectState } from "./game/game.state";



export const selectGame = createFeatureSelector<GameObjectState>('game');

// export const selectGame = (state: AppState) => state.game;

export const selectGameList = createSelector(
    selectGame,
    (state: any) => state.game.gameList
)

export const selectGameListObj = createSelector(
    selectGameList,
    (state: Array<GameObject>) => state.length > 0 ? state[0] : {}
)

export const selectGameListQuestion = createSelector(
    selectGameList,
    (state: Array<GameObject>) => state.length > 0 ? state[0].question : ""
)

