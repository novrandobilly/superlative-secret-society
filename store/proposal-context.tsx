import React, { createContext, useState } from 'react';
import { ProposalsType, OptionsType } from '../models';

interface ProposalContextType {
  proposals: ProposalsType[];
  options: OptionsType[];
  addProposal: (payload: ProposalsType) => void;
  addOption: (payload: OptionsType) => void;
}
export const ProposalContext = createContext<ProposalContextType>({
  proposals: [],
  options: [],
  addProposal: (payload: ProposalsType) => {},
  addOption: (payload: OptionsType) => {},
});

const ProposalContextProvider: React.FC = ({ children }) => {
  const [proposalList, setProposalList] = useState<ProposalsType[]>([
    {
      id: 1,
      title: 'Do you like art?',
      description: 'To determine how much you like the art.',
      end_date: new Date('05/05/2022'),
      publisher: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      title: 'Do you like music?',
      description: 'To determine how much you like the music.',
      end_date: new Date('05/05/2022'),
      publisher: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
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
      opt: ['Yes', 'Of Course', 'YES WE LOVE ART!!!'],
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 2,
      proposal_id: 2,
      opt: ['Yes', 'Of Course', 'YES WE LOVE MUSIC!!!'],
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
    {
      id: 3,
      proposal_id: 3,
      opt: ['Yes', 'Of Course', 'YES WE LOVE PROGRAMMING!!!'],
      created_at: new Date('05/05/2021'),
      PRIMARY_KEY: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    },
  ]);

  const addProposalHandler = (payload: ProposalsType) => {
    setProposalList((prevState) => [...prevState, payload]);
  };

  const addOptionHandler = (payload: OptionsType) => {
    setOptionList((prevState) => [...prevState, payload]);
  };

  const contextValue: ProposalContextType = {
    proposals: proposalList,
    options: optionList,
    addProposal: addProposalHandler,
    addOption: addOptionHandler,
  };

  return <ProposalContext.Provider value={contextValue}>{children}</ProposalContext.Provider>;
};

export default ProposalContextProvider;
