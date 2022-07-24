export interface Vote {
  id: number;
  title: string;
}

export interface NewVote extends Omit<Vote, 'id'> {}
