import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectGameList, selectGameListObj, selectGameListQuestion } from 'src/app/state/app.selector';
import { GameObject, GameObjectState } from 'src/app/state/game/game.state';
import { encode, decode } from 'js-base64';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  question?: string ;
  gameRound!: GameObject;
  gameList!: Array<any>;

  constructor(private store$: Store<GameObjectState>) { }

  ngOnInit(): void {
    
    this.gameRound = {
      status: ""
    }

    this.store$.select(selectGameList ).subscribe( ( (res: Array<GameObject>) => {

      this.gameList = this.decodeGameObj(res);
    } ) )


    
    
  }
  decodeGameObj(res: any[]): any[] {
    if (res.length == 0) return res;
     
      let fromApi: any[] = [...res];
      let incorrectAnswersDecode: string[] = []
  
      for(let i = 0; i < fromApi.length; i++) {
        
        fromApi[i].incorrect_answers?.map( (element: string) => {
          incorrectAnswersDecode.push(decode(element)); 
        });
  
        // let t = 
        this.gameRound.type = decode( fromApi[i].type  ? fromApi[i].type + "" : "");
        this.gameRound.question = decode(fromApi[i].question ? fromApi[i].question + "" : "");
        this.gameRound.category = decode(fromApi[i].category ? fromApi[i].category + "" : "" );
        this.gameRound.difficulty = decode(fromApi[i].difficulty ? fromApi[i].difficulty + "" : "");
        this.gameRound.correct_answer = decode(fromApi[i].correct_answer ? fromApi[i].correct_answer + "" : "");
        this.gameRound.incorrect_answers = incorrectAnswersDecode;
  
        // this.gameRound = fromApi[i];
      }
      return fromApi;
    

  }

}
