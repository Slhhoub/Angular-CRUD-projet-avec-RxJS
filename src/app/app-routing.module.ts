import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { HomeComponent } from './components/home/home.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';

const routes: Routes = [
  {path:"", component:HomeComponent,title:"home"},
  {path:"players", component:PlayerComponent,title:"players"},
  {path:"NewPlayer", component:NewPlayerComponent,title:"NewPlayer"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
