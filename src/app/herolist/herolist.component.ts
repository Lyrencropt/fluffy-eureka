import { Component, OnInit } from '@angular/core';
import { IHero } from "../models/Hero";
import { HeroServiceService } from "../hero-service.service";

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit {
  pageTitle: "Hero List";
  heroes: IHero[];
  errorMessage: string;

  constructor(private _heroService: HeroServiceService) { }


  ngOnInit(): void {
    this._heroService.getHeroes()
            .subscribe(heroes => { 
                this.heroes = heroes;
            },
                error => this.errorMessage = <any>error);
          } 

}
