import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Vote } from '../../../../models/vote';

@Component({
  selector: 'votes-list-item',
  templateUrl: './votes-list-item.component.html',
  styleUrls: ['./votes-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotesListItemComponent implements OnInit {
  @Input() vote: Vote | undefined;

  constructor() {}

  ngOnInit(): void {}
}
