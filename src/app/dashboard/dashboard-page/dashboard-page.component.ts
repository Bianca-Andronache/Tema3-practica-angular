import { GamesService } from './../../_core/services/games.service';
import { GameDataService } from './../../_core/services/game-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  gameList = [];
  
  gameListFilter = [];

  eventFilter: any;

  constructor(private router: Router, private gameDataService: GameDataService, private gamesService: GamesService) {

  }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe({
      next: (response) => {
        this.gameList = response;
        this.gameListFilter = response;
      }
    })
  }

  inputEvent(e: any): void {
    this.eventFilter = e;
  }

  gameFilter(e: any) {
    console.log(this.gameList);
    this.gameListFilter = this.gameList.filter(game => {
      // const valueTitle = game.title.toUpperCase();
      // const valueIndex = e.target.value.toUpperCase();
      return game.title.toUpperCase().includes(e.target.value.toUpperCase());
    });
  }

  gameSorter() {
    this.gameListFilter.sort( (a, b) => {

      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();


      if(aTitle < bTitle){
        return -1;
      }

      if(aTitle > bTitle){
        return 1;
      }

      return 0;

    } )
  }

  navigateToGamePage(gameData: any) {
    this.gameDataService.selectedCard = gameData;
    this.router.navigate(['/game-page'],{queryParams:{gameId:gameData.id}});
  }
}
