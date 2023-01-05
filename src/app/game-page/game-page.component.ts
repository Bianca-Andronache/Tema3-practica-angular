import { GamesService } from './../_core/services/games.service';
import { GameDataService } from './../_core/services/game-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  gameTitle:string;
  gameDescription:string;

  constructor(private gameDataService: GameDataService, private activatedRoute: ActivatedRoute, private gamesService: GamesService) {
    this.activatedRoute.queryParams.subscribe(
      (response) => {
        this.getGameDetails(response["gameId"]);
      })
   }

  ngOnInit(): void {
    //this.gameTitle = this.gameDataService.selectedCard.title;
    //this.gameDescription = this.gameDataService.selectedCard.description;
  }

  getGameDetails(id:any){
    this.gamesService.getGameById(id).subscribe({
      next:(response) => {
        this.gameTitle = response.title;
        this.gameDescription = response.description;
      }
    })
  }
}
