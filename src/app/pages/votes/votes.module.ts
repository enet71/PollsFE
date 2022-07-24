import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVoteComponent } from './new-vote/new-vote.component';
import { VotesListComponent } from './votes-list/votes-list.component';
import { VotesComponent } from './votes.component';
import { RouterModule } from '@angular/router';
import { VOTES_ROUTES } from './votes.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { votesFeatureName } from './store/consts/votes-state.const';
import { votesReducer } from './store/reducers/votes.reducers';
import { EffectsModule } from '@ngrx/effects';
import { VotesEffects } from './store/effects/votes.effects';
import { VoteInfoComponent } from './vote-info/vote-info.component';
import { VotesListItemComponent } from './votes-list/votes-list-item/votes-list-item.component';


@NgModule({
  declarations: [
    NewVoteComponent,
    VotesListComponent,
    VotesComponent,
    VoteInfoComponent,
    VotesListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(VOTES_ROUTES),
    ReactiveFormsModule,
    StoreModule.forFeature(votesFeatureName, votesReducer),
    EffectsModule.forFeature([VotesEffects])
  ]
})
export class VotesModule {
}
