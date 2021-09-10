import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DesgloseSesionComponent} from "./desglose-sesion/desglose-sesion.component";

const routes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'desglose-sesion/:trimestreId', component: DesgloseSesionComponent},

  { path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
