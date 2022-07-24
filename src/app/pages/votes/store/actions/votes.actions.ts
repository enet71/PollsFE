import { createAction, props } from '@ngrx/store';
import {
  DeleteVoteProps,
  GetVoteProps,
  GetVotesSuccessProps,
  GetVoteSuccessProps,
} from '../models/votes-actions.models';

const prefix = '[VOTES]';

export const getVotes = createAction(`${prefix} Get votes`);
export const getVotesSuccess = createAction(
  `${prefix} Get votes success`,
  props<GetVotesSuccessProps>()
);
export const getVotesFail = createAction(`${prefix} Get votes fail`);

export const getVote = createAction(
  `${prefix} Get vote`,
  props<GetVoteProps>()
);
export const getVoteSuccess = createAction(
  `${prefix} Get vote success`,
  props<GetVoteSuccessProps>()
);
export const getVoteFail = createAction(`${prefix} Get vote fail`);
export const deleteVote = createAction(
  `${prefix} Delete vote`,
  props<DeleteVoteProps>()
);
export const deleteVoteSuccess = createAction(`${prefix} Delete vote success`);
export const deleteVoteFail = createAction(`${prefix} Delete vote fail`);
