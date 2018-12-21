import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service'
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // selectedHero : Hero

  // onSelect(hero : Hero){
  //   this.selectedHero = hero;
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  constructor(private heroService : HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

}
