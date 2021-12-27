export interface GameObject {
    
    status: string;
    category?: string ,
    type?: string | null,
    difficulty?: string | null,
    question?: string | null,
    correct_answer?: string | null,
    incorrect_answers?: Array<string> | null
}

export interface GameObjectState {
    status: string;
    gameList: Array<GameObject>;
}


export enum  GameObjectMsgStatus {
    Success = 'Returned results successfully',
    TokenNotFound  = 'Session Token does not exist',
    InvalidParameter  = 'Contains an invalid parameter. Arguements passed in arent valid. (Ex. Amount = Five)',
    TokenEmpty  = 'Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.',
    NoResults  = 'Could not return results. The API doesnt have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)',
}

export enum GameObjectStatus {
    Requested = 'Requested',
    Ready = 'Ready',
    Started = 'Started',
    Failed = 'Failed',
    Completed = 'Completed'
}
