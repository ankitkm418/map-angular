import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path:'home', component:HomeComponent },
  {path : 'edit', component:EditComponent},
  {path : 'map', component : MapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
