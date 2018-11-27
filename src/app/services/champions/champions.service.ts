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

  getChampions (version): Observable<any> {
    return this.http.get<any>(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
  }

  getVersion(): Observable<any> {
    return this.http.get<any>(`https://ddragon.leagueoflegends.com/realms/euw.json`);
  }
}
