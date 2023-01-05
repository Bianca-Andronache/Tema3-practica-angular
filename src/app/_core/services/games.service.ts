import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  serverUrl:string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getGames():Observable<any>{
    return this.httpClient.get(this.serverUrl+"/games")
  }

  getGameById(gameId):Observable<any>{
    return this.httpClient.get(this.serverUrl+"/games"+"/"+gameId);
  }
}
