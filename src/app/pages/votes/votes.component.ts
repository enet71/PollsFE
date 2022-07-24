import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
