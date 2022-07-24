import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vote } from '../../../models/vote';
import { Store } from '@ngrx/store';
import { votesSelector } from '../store/selectors/votes.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotesListComponent implements OnInit {
  public votes$: Observable<Vote[]> = this.store.select(votesSelector);

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {}

  public openVoteInfo(id: number): void {
    this.router.navigate(['info', id], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
