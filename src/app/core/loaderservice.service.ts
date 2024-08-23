import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {

  constructor() { }

  private readonly loaderSubject = new BehaviorSubject< boolean>(false);
  
  readonly loader$=this.loaderSubject.asObservable();
  
  get loader(){
    return this.loaderSubject.getValue();
  }

  private set loader(response){
    this.loaderSubject.next(response);
  }

  showLoader(){
    this.loader=true;
  }

  hideLoader(){
    this.loader=false;
  }
}
