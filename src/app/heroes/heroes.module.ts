import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HerolistComponent } from '../herolist/herolist.component';
import { HeroServiceService } from "../hero-service.service";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { AbilitiesComponent } from "../abilities/abilities.component";
import { AbilityService } from "../ability.service";

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'heroes', component: HerolistComponent },
        { path: 'heroes/:id',component: HeroDetailComponent,
        children: [
          {path: '', redirectTo: 'abilities', pathMatch: 'full'}, 
          {path: 'abilities/:id', component: AbilitiesComponent}, 
        ] }
    ]),
    CommonModule
  ],
  declarations: [],
  providers: [
    HeroServiceService ,
    AbilityService
  ]
})
export class HeroesModule { }
