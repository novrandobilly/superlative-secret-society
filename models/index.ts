export interface AdminsType {
  id: number;
  address: string;
  created_at: Date;
  PRIMARY_KEY: string;
}

export interface OptionsType {
  id: number;
  proposal_id: number;
  opt: string;
  created_at: Date;
  PRIMARY_KEY: string;
}

export interface ProposalsType {
  id: string;
  title: string;
  description: string;
  end_date: Date;
  publisher: string;
  created_at: Date;
  PRIMARY_KEY: string;
}

export interface VotesType {
  id: number;
  proposal_id: number;
  voter_addr: string;
  voting_power: number;
  opt_id: number;
  created_at: Date;
  PRIMARY_KEY: string;
}
