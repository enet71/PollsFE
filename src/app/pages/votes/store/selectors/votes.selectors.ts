import { createFeatureSelector, createSelector } from '@ngrx/store';
import { votesFeatureName } from '../consts/votes-state.const';
import { VotesState } from '../models/votes-state.models';
import { Vote } from '../../../../models/vote';

export const votesFeatureSelector =
  createFeatureSelector<VotesState>(votesFeatureName);

export const votesSelector = createSelector(
  votesFeatureSelector,
  (state: VotesState): Vote[] => state.votes
);

export const voteInfoSelector = createSelector(
  votesFeatureSelector,
  (state: VotesState): Vote | null => state.voteInfo
);
