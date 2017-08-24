import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

import { HerolistComponent } from './herolist/herolist.component';
import { HeroesModule } from "./heroes/heroes.module";
import { HttpClientModule } from "@angular/common/http";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AbilitiesComponent } from './abilities/abilities.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponentComponent,
    HerolistComponent,
    HeroDetailComponent,
    AbilitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeroesModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponentComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
