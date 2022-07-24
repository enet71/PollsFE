import { Vote } from '../../../../models/vote';

export interface GetVotesSuccessProps {
  votes: Vote[];
}

export interface GetVoteProps {
  id: number;
}

export interface GetVoteSuccessProps {
  vote: Vote;
}

export interface DeleteVoteProps {
  id: number;
}
