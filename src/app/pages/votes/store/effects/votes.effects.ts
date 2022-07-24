import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  deleteVote,
  deleteVoteFail,
  deleteVoteSuccess,
  getVote,
  getVoteFail,
  getVotes,
  getVotesFail,
  getVotesSuccess,
  getVoteSuccess,
} from '../actions/votes.actions';
import { catchError, switchMap } from 'rxjs';
import { VoteService } from '../../../../services/vote.service';
import { Vote } from '../../../../models/vote';
import { DeleteVoteProps, GetVoteProps } from '../models/votes-actions.models';

@Injectable()
export class VotesEffects {
  public getVotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVotes),
      switchMap(() =>
        this.voteService.getList().pipe(
          switchMap((votes: Vote[]) => [getVotesSuccess({ votes })]),
          catchError(() => [getVotesFail()])
        )
      )
    )
  );

  public getVote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVote),
      switchMap((props: GetVoteProps) =>
        this.voteService.getById(props.id).pipe(
          switchMap((vote: Vote) => [getVoteSuccess({ vote })]),
          catchError(() => [getVoteFail()])
        )
      )
    )
  );

  public deleteVote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteVote),
      switchMap((props: DeleteVoteProps) =>
        this.voteService.delete(props.id).pipe(
          switchMap(() => [deleteVoteSuccess()]),
          catchError(() => [deleteVoteFail()])
        )
      )
    )
  );

  constructor(private actions$: Actions, private voteService: VoteService) {}
}
