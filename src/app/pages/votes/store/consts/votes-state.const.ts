import { VotesState } from '../models/votes-state.models';

export const votesFeatureName = 'VOTES';
export const initialVotesState: VotesState = {
  votes: [],
  voteInfo: null,
};
