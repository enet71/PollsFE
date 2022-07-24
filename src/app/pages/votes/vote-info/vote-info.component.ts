import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Vote } from '../../../models/vote';
import { Subscription, tap } from 'rxjs';
import { voteInfoSelector } from '../store/selectors/votes.selectors';
import { deleteVote } from '../store/actions/votes.actions';

@Component({
  selector: 'vote-info',
  templateUrl: './vote-info.component.html',
  styleUrls: ['./vote-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoteInfoComponent implements OnInit, OnDestroy {
  public voteInfo: Vote | null | undefined;

  private subscription: Subscription = new Subscription();

  constructor(private store: Store, private cd: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.addVoteListener();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public delete(): void {
    this.store.dispatch(deleteVote({ id: this.voteInfo!.id }));
  }

  private addVoteListener(): void {
    const subscription = this.store
      .select(voteInfoSelector)
      .pipe(
        tap((vote: Vote | null) => {
          this.voteInfo = vote;
          this.cd.markForCheck();
        })
      )
      .subscribe();

    this.subscription.add(subscription);
  }
}
