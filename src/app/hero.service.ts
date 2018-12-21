import { Injectable } from '@angular/core';
import {Hero} from './hero.model'
import {HEROES} from './mock-heroes'
import {Observable, of} from 'rxjs'
import {MessageService} from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('Hero Service: Fetched Heroes')
    return of(HEROES);
  }
}
