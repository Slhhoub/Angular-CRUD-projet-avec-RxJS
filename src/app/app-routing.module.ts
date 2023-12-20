import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { HomeComponent } from './components/home/home.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

const routes: Routes = [
  {path:"", component:HomeComponent,title:"home"},
  {path:"players", component:PlayerComponent,title:"players"},
  {path:"NewPlayer", component:NewPlayerComponent,title:"NewPlayer"},
  {path:"EditPlayer/:id", component:EditPlayerComponent,title:"editPlayer"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
