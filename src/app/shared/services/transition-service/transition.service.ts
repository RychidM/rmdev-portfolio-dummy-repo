import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  // A BehaviourSubject to broadcast the loading state to components
  public readonly isLoading = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.pipe(filter(event =>
      event instanceof NavigationStart ||
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        // When navigation start, set loading to true
        this.isLoading.next(true);
      } else {
        // On End, Cancel, or Error, set loading to false
        this.isLoading.next(false);
      }
    });
  }

}
