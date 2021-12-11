import React, { createContext, useState } from 'react';
import { ProposalsType, OptionsType, VotesType } from '../models';

interface ProposalContextType {
  proposals: ProposalsType[];
  options: OptionsType[];
  votes: VotesType[];
  addProposal: (payload: ProposalsType) => void;
  addOption: (payload: OptionsType[]) => void;
}
export const ProposalContext = createContext<ProposalContextType>({
  proposals: [],
  options: [],
  votes: [],
  addProposal: (payload: ProposalsType) => {},
  addOption: (payload: OptionsType[]) => {},
});

const ProposalContextProvider: React.FC = ({ children }) => {
  const [proposalList, setProposalList] = useState<ProposalsType[]>([
    {
      id: '1',
      title: 'Do you like art?',
      description: 'To determine how much you like the art.',
      end_date: new Date('05/05/2022'),
      publisher: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: ' 2',
      title: 'Do you like music?',
      description: 'To determine how much you like the music.',
      end_date: new Date('05/05/2022'),
      publisher: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: '3',
      title: 'Do you like programming?',
      description: 'To determine how much you like the programming.',
      end_date: new Date('05/05/2022'),
      publisher: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
  ]);
  const [optionList, setOptionList] = useState<OptionsType[]>([
    {
      id: 1,
      proposal_id: 1,
      opt: 'Yes',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      proposal_id: 1,
      opt: 'Of Course',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
      proposal_id: 1,
      opt: 'YES WE LOVE ART!!!',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 1,
      proposal_id: 2,
      opt: 'Yes',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      proposal_id: 2,
      opt: 'Of Course',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
      proposal_id: 2,
      opt: 'YES WE LOVE MUSIC!!!',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 1,
      proposal_id: 3,
      opt: 'Yes',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      proposal_id: 3,
      opt: 'Of Course',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
      proposal_id: 3,
      opt: 'YES WE LOVE PROGRAMMING!!!',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
  ]);

  const [votes, setVotes] = useState<VotesType[]>([
    {
      id: 1,
      proposal_id: 1,
      voter_addr: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
      voting_power: 4,
      opt_id: 1,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      proposal_id: 1,
      voter_addr: '0x4e0843e8daa53406121558feebf0cde0f1fcefc1',
      voting_power: 10,
      opt_id: 2,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
      proposal_id: 1,
      voter_addr: '0x4e0843e8daa53406321588feebf0cde0f1fcefc1',
      voting_power: 2,
      opt_id: 3,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 4,
      proposal_id: 1,
      voter_addr: '0x4e0843e8daa53406621588feebf0cde0f1fcefc1',
      voting_power: 5,
      opt_id: 1,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 5,
      proposal_id: 1,
      voter_addr: '0x4e0843e8daa53401121588feebf0cde0f1fcefc1',
      voting_power: 7,
      opt_id: 2,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 1,
      proposal_id: 2,
      voter_addr: '0x4e0843e8daa53406121588feebg0cde0f1fcefc1',
      voting_power: 9,
      opt_id: 3,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      proposal_id: 2,
      voter_addr: '0x4e0843e8daa534061215a8feebf0cde0f1fcefc1',
      voting_power: 1,
      opt_id: 1,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
      proposal_id: 2,
      voter_addr: '0x4e0843e8daa53406121b88feebf0cde0f1fcefc1',
      voting_power: 15,
      opt_id: 2,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 4,
      proposal_id: 2,
      voter_addr: '0x4e0843e8daa53406121488feebf0cde0f1fcefc1',
      voting_power: 8,
      opt_id: 3,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 5,
      proposal_id: 2,
      voter_addr: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
      voting_power: 4,
      opt_id: 3,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 1,
      proposal_id: 3,
      voter_addr: '0x4e0843e8daa53406121p88feebf0cde0f1fcefc1',
      voting_power: 6,
      opt_id: 3,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      proposal_id: 3,
      voter_addr: '0x4e0843e8daa53406121528feebf0cde0f1fcefc1',
      voting_power: 4,
      opt_id: 1,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
      proposal_id: 3,
      voter_addr: '0x4e4843e8daa53406121588feebf0cde0f1fcefc1',
      voting_power: 8,
      opt_id: 2,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 4,
      proposal_id: 3,
      voter_addr: '0x4e0643e8daa53406121588feebf0cde0f1fcefc1',
      voting_power: 12,
      opt_id: 3,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 5,
      proposal_id: 3,
      voter_addr: '0x4e0543e8daa53406121588feebf0cde0f1fcefc1',
      voting_power: 5,
      opt_id: 3,
      created_at: new Date(),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
  ]);

  const addProposalHandler = (payload: ProposalsType) => {
    setProposalList((prevState) => [...prevState, payload]);
  };

  const addOptionHandler = (payload: OptionsType[]) => {
    setOptionList((prevState) => [...prevState, ...payload]);
  };

  const contextValue: ProposalContextType = {
    proposals: proposalList,
    options: optionList,
    votes: votes,
    addProposal: addProposalHandler,
    addOption: addOptionHandler,
  };

  return <ProposalContext.Provider value={contextValue}>{children}</ProposalContext.Provider>;
};

export default ProposalContextProvider;
