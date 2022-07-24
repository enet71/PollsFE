import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { getVotes } from '../store/actions/votes.actions';

@Injectable({
  providedIn: 'root'
})
export class VotesListResolver implements Resolve<boolean> {
  constructor(private store: Store) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(getVotes());

    return of(true);
  }
}
