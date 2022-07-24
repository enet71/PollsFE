import { Routes } from '@angular/router';
import { VotesListComponent } from './votes-list/votes-list.component';
import { NewVoteComponent } from './new-vote/new-vote.component';
import { VotesComponent } from './votes.component';
import { VotesListResolver } from './resolvers/votes-list.resolver';
import { VoteInfoComponent } from './vote-info/vote-info.component';
import { VoteInfoResolver } from './resolvers/vote-info.resolver';

export const VOTES_ROUTES: Routes = [
  {
    path: '',
    component: VotesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: VotesListComponent,
        resolve: {
          VotesListResolver,
        },
      },
      {
        path: 'new',
        component: NewVoteComponent,
      },
      {
        path: 'info/:id',
        component: VoteInfoComponent,
        resolve: {
          VoteInfoResolver,
        },
      },
    ],
  },
];
