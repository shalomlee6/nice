import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import * as AppAction from './state/app.action';
import { GameObject, GameObjectState } from './state/game/game.state';
import { selectGame } from './state/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Next';
  game$!: Observable<GameObjectState>;

  constructor(private store$: Store<AppState>){}


  ngOnInit(): void {

    this.game$ = this.store$.select(selectGame)
    // this.TriviaSessionState$ = this.store$.select( (store) => store.game ) 
    this.store$.dispatch( AppAction.GameObjRequestAction() );

  }

  
}
