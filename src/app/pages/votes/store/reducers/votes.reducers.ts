import { createReducer, on } from '@ngrx/store';
import { initialVotesState } from '../consts/votes-state.const';
import { getVotesSuccess, getVoteSuccess } from '../actions/votes.actions';
import { VotesState } from '../models/votes-state.models';
import {
  GetVotesSuccessProps,
  GetVoteSuccessProps,
} from '../models/votes-actions.models';

export const votesReducer = createReducer(
  initialVotesState,
  on(getVotesSuccess, onGetVotesSuccess),
  on(getVoteSuccess, onGetVoteSuccess)
);

function onGetVotesSuccess(
  state: VotesState,
  props: GetVotesSuccessProps
): VotesState {
  return {
    ...state,
    votes: props.votes,
  };
}

function onGetVoteSuccess(
  state: VotesState,
  props: GetVoteSuccessProps
): VotesState {
  return {
    ...state,
    voteInfo: props.vote,
  };
}
