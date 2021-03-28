import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 1, name: 'Spider-man' },
      { id: 2, name: 'Wolverine' },
      { id: 3, name: 'Captain-America' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Iron man' },
      { id: 6, name: 'Black panther' },
      { id: 7, name: 'Vision' },
      { id: 8, name: 'Black widow' },
      { id: 9, name: 'Hulk' },
      { id: 10, name: 'Hawkeye' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

