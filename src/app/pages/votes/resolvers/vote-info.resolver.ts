import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { getVote } from '../store/actions/votes.actions';

@Injectable({
  providedIn: 'root',
})
export class VoteInfoResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const params = route.params as { id: string };
    this.store.dispatch(getVote({ id: +params.id }));

    return of(true);
  }
}
