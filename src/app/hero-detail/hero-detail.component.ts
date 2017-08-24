import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroServiceService } from "../hero-service.service";
import { IHero } from "../models/Hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  pageTitle: string = "Hero Detail";
  hero: IHero;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _heroService: HeroServiceService) {}

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.getHero(id);
  }
  
  getHero(id: number) {
    this._heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      error => this.errorMessage = <any>error;
    });
  }
  
  onBack(): void {
    this._router.navigate(['/heroes']);
  }

}
