import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotesModule } from './pages/votes/votes.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'votes',
    pathMatch: 'full'
  },
  {
    path: 'votes',
    loadChildren: () => import('./pages/votes/votes.module').then(({VotesModule}) => VotesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
