import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardChoisirService {

  questionsCompleted: BehaviorSubject<any[]> =  new BehaviorSubject<any[]>([])

  constructor() { }
}
