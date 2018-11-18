import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) {}

  getChampions (): any {
    return this.http.get<any>('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
  }
}
