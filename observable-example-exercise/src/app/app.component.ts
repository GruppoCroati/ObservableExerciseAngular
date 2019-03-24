import { Component } from '@angular/core';
import { HEROES } from './models/mock-.heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable-example-exercise';

  heroes: string[] = HEROES
  filteredHeroes: string[] = this.heroes.slice();
  filteredHeroesBySearch(eventString: string) {

    if(!eventString) {
      this.heroes = this.filteredHeroes;
    } else {
      this.heroes = this.filteredHeroes.
                        filter(element => element.includes(eventString));
    }
  }
}
