import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
// can stop hardcoding data from mock-heroes like this:
//import {HEROES} from '../mock-heroes';
// and instead get it from our hero service like this
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero; // = { id: 1, name: 'Windstorm'};

  // not going to hardcode dependency on HEROES data like this:
 // heroes = HEROES;
 // instead we'll data drive it using the hero service
 heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

}
