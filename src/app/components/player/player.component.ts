import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { DataState, StateStatus } from '../../state/plyerState';
import { Player } from '../../model/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit{
  playerObservbale$=new Observable<DataState<Player[]>>()
  readonly stateStatus=StateStatus;

  constructor(private servicesPlayer:PlayerService,private router:Router){}

  ngOnInit(): void {
    this.onGetAllPlayers();
  }
  onGetAllPlayers(){
    this.playerObservbale$=this.servicesPlayer.getAllPlayer().pipe(
      map(data=>({
        dataStateStatus:StateStatus.LOADED,
        dataState:data
      })),
      startWith({
        dataStateStatus:StateStatus.LOADING,
      }),
      catchError(error=>of({
        dataStateStatus:StateStatus.ERROR,
        dataStateError:error
      }))
    )
  }
  onGetAllPlayerSelected(){
    this.playerObservbale$=this.servicesPlayer.getAllPlayerSelected().pipe(
      map(data=>({
        dataStateStatus:StateStatus.LOADED,
        dataState:data
      })),
      startWith({
        dataStateStatus:StateStatus.LOADING,
      }),
      catchError(error=>of({
        dataStateStatus:StateStatus.ERROR,
        dataStateError:error
      }))
    )
  }
  onSearch(formControl:any){
    this.playerObservbale$=this.servicesPlayer.getAllPlayerKeyword(formControl.keyword).pipe(
      map(data=>({
        dataStateStatus:StateStatus.LOADED,
        dataState:data
      })),
      startWith({
        dataStateStatus:StateStatus.LOADING,
      }),
      catchError(error=>of({
        dataStateStatus:StateStatus.ERROR,
        dataStateError:error
      }))
    )
  }
  onChangeStatus(p:Player){
    this.servicesPlayer.onChangeStatus(p).subscribe(
      (p:Player)=>{
        return p.selected;
      }

    )
  }
  onDelete(p:Player){
    let conf = confirm('voulez-vous vraiment supprimer ce player');
    if(conf){
      this.servicesPlayer.ondelete(p).subscribe(
        (data)=>{
          this.onGetAllPlayers()
        }
      )
    }
  }

  onNewPlayer(){
    this.router.navigateByUrl("NewPlayer");
  }

  onEdit(p:Player){
    this.router.navigateByUrl("EditPlayer/"+p.id);
  }
}
