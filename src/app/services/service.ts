import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Service {

  public sub = new BehaviorSubject<number>(0);

  constructor() { }

  passInId(id: number){
    this.sub.next(id);
  }
}
