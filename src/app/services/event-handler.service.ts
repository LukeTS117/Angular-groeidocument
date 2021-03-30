import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {
  $reloadEvent = new EventEmitter();

  constructor() { }

  emitEvent(){
    this.$reloadEvent.emit();
  }
}
