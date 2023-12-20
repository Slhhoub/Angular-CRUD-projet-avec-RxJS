import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../model/player';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css'
})
export class EditPlayerComponent implements OnInit{

  public id!:number;
  public playerForms!:FormGroup;
  public updateSuccess!:boolean;
  Player!:Player


  constructor(private router:ActivatedRoute ,private servicePlayer:PlayerService){}


  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];


    this.playerForms = new FormGroup({
      id :  new FormControl(''),
      playerName :  new FormControl('',Validators.compose([Validators.required])),
      email :  new FormControl('',Validators.compose([Validators.required,Validators.email])),
      gender :  new FormControl('',Validators.compose([Validators.required])),
      selected :  new FormControl('',Validators.compose([Validators.required])),
      countryName :  new FormControl('',Validators.compose([Validators.required])),
    })

    this.getPlayer();

  }

  getPlayer(){
    this.servicePlayer.getPlayer(this.id).subscribe(
      (data)=>{
       this.Player=data;
       this.playerForms.patchValue({
        id: this.Player.id,
        playerName: this.Player.playerName,
        email: this.Player.email,
        gender: this.Player.gender,
        selected: this.Player.selected,
        countryName: this.Player.countryName,
      });
      }
    )
  }

  onUpdatePlayer(playerForms:any){
    this.servicePlayer.updatePlayer(playerForms).subscribe(
      (data)=>{
        this.updateSuccess=true;
      }
    )
  }

}




