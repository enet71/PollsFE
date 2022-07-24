import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VoteService } from '../../../services/vote.service';
import { NewVote, Vote } from '../../../models/vote';

@Component({
  selector: 'new-vote',
  templateUrl: './new-vote.component.html',
  styleUrls: ['./new-vote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewVoteComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    title: []
  });

  constructor(private fb: FormBuilder, private voteService: VoteService) {
  }

  public ngOnInit(): void {
  }

  public createVote(): void {
    const formValue: NewVote = this.form.value;
    this.voteService.create({
      title: formValue.title
    })
      .subscribe();
  }

}
