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
  const [proposalList, setProposalList] = useState<ProposalsType[]>([]);
  const [optionList, setOptionList] = useState<OptionsType[]>([]);

  const [votes, setVotes] = useState<VotesType[]>([]);

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
