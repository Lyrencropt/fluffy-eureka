import { Component, OnInit } from '@angular/core';
import { IAbility } from "../models/Ability";
import { ActivatedRoute, Router } from "@angular/router";
import { AbilityService } from "../ability.service";

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  pageTitle: string = "Ability Detail";
  ability: IAbility;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _abilityService: AbilityService) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.getAbility(params.id);
    });
    const id = +this._route.snapshot.paramMap.get('id');
    this.getAbility(id);
  }
  
  getAbility(id: number) { 
    this._abilityService.getAbility(id).subscribe(
      ability => this.ability = ability,
      error => this.errorMessage = <any>error);
  }
  
  onBack(): void {
    this._router.navigate(['/heroes/' + this.ability.hero.id]);
  }

}
