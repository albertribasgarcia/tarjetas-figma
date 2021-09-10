import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SettingsComponent } from './settings/settings.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import { InfoTrimestreComponent } from './home/info-trimestre/info-trimestre.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { UltimoVistoComponent } from './home/ultimo-visto/ultimo-visto.component';
import {HttpClientModule} from "@angular/common/http";
import { ListaReproduccionComponent } from './desglose-sesion/lista-reproduccion/lista-reproduccion.component';
import { DesgloseSesionComponent } from './desglose-sesion/desglose-sesion.component';
import { DialogAntesEmpezarComponent } from './home/dialog-antes-empezar/dialog-antes-empezar.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SharedService} from "./shared/shared.service";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SettingsComponent,
    InfoTrimestreComponent,
    UltimoVistoComponent,
    ListaReproduccionComponent,
    DesgloseSesionComponent,
    DialogAntesEmpezarComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        FlexModule,
        MatIconModule,
        RouterModule,
        AppRoutingModule,
        MatSidenavModule,
        MatSelectModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        ScrollingModule,
        FormsModule
    ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
