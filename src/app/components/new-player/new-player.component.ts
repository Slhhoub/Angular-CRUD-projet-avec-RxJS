import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrl: './new-player.component.css'
})
export class NewPlayerComponent implements OnInit {
  public playerForms!:FormGroup
  public createSuccess!:boolean;

  constructor(private playerService:PlayerService){}

  ngOnInit(): void {
    this.playerForms = new FormGroup({
      playerName :  new FormControl('',Validators.compose([Validators.required])),
      email :  new FormControl('',Validators.compose([Validators.required,Validators.email])),
         gender :  new FormControl('',Validators.compose([Validators.required])),
     selected :  new FormControl('',Validators.compose([Validators.required])),
    countryName :  new FormControl('',Validators.compose([Validators.required])),
    })
  }

  onCreatePlayer(playerFormsd:any){
    if(this.playerForms.valid){
      this.playerService.savePlayer(playerFormsd).subscribe(
        (res)=>{
          this.createSuccess=true;
        },
        (error)=>{
          console.log(error);
        }
      )
    }


  }
}
