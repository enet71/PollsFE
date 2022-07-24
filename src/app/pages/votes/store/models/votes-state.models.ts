import { Vote } from '../../../../models/vote';

export interface VotesState {
  votes: Vote[];
  voteInfo: Vote | null;
}
