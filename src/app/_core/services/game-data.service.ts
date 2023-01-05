import { Game } from './../models/Games';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  selectedCard:Game;

  constructor() { }
}
