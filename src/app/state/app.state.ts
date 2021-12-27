import { GameObjectState, GameObjectStatus } from "./game/game.state";



 export interface AppState {
    game: GameObjectState;
 }

export const initialAppState: AppState = {
    
    game: {
        status: GameObjectStatus.Ready,
        gameList: []
    }
};
