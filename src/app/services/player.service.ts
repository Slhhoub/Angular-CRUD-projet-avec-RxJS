import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  getAllPlayer():Observable<Player[]>{
    return this.http.get<Player[]>(`${environment.applink}/players`);
  }

  getAllPlayerSelected():Observable<Player[]>{
    return this.http.get<Player[]>(`${environment.applink}/players?selected=true`);
  }

  getAllPlayerKeyword(keyword:string):Observable<Player[]>{
    return this.http.get<Player[]>(`${environment.applink}/players?playerName_like=${keyword}`);
  }

  onChangeStatus(p:Player):Observable<Player>{
    p.selected=!p.selected;
    return this.http.put<Player>(`${environment.applink}/players/${p.id}`,p);
  }

  ondelete(p:Player):Observable<any>{
    return this.http.delete<any>(`${environment.applink}/players/${p.id}`);
  }
}
