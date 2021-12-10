import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProposalContext } from '../../../store/proposal-context';
import Layout from '../../../components/Layout';
import { DateTime } from 'luxon';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ProposalsType, OptionsType, VotesType } from '../../../models';
import styles from './ProposalDetail.module.scss';

// const ProposalId: React.FC<{ foundProposal: ProposalsType; foundOptions: OptionsType }> = ({
//   foundProposal,
//   foundOptions,
// }) => {
const ProposalId: React.FC = () => {
  const [proposal, setProposal] = useState<ProposalsType>({
    id: 0,
    title: '',
    description: '',
    end_date: new Date(),
    publisher: '',
    created_at: new Date(),
    PRIMARY_KEY: '',
  });
  const [options, setOptions] = useState<OptionsType[]>([]);
  const [votes, setVotes] = useState<VotesType[]>([]);
  const [totalPower, setTotalPower] = useState<number>(0);
  const [percentage, setPercentage] = useState<{ [option: string]: number }>({});

  const proposalCtx = useContext(ProposalContext);
  const id = useRouter().query.id;

  useEffect(() => {
    const foundProposal = proposalCtx.proposals.find((proposal) => proposal.id.toString() === id);
    const foundOptions = proposalCtx.options.filter((opt) => opt.proposal_id.toString() === id);
    const foundVotes = proposalCtx.votes.filter((vote) => vote.proposal_id.toString() === id);

    if (foundVotes.length > 1 && foundOptions.length > 1 && foundProposal) {
      foundOptions.map((opt, i) => {
        let temp: number = 0;
        foundVotes.map((vote) => {
          if (vote.opt_id === opt.id) temp += vote.voting_power;
        });
        setPercentage((prevState) => {
          let tempState = {
            ...prevState,
            [`option_${i + 1}`]: temp,
          };
          return tempState;
        });
      });
      let calculatePower: number = foundVotes.map((vote) => vote.voting_power).reduce((prev, curr) => prev + curr);
      setProposal(foundProposal);
      setOptions(foundOptions);
      setTotalPower(calculatePower);
      setVotes(foundVotes);
    }
  }, [proposalCtx]);

  // let percentage: { [option: string]: number } = {};

  const getPercentage = (object: { [option: string]: number }, index: number, power: number): string => {
    return ((object[`option_${index + 1}`] * 100) / power).toFixed(1);
  };

  return (
    <Layout home={false}>
      <div className={styles.QuestionsContainer}>
        <h1 className={styles.Title}>{proposal.title}</h1>
        <p className={styles.DateEnds} suppressHydrationWarning>
          Ends {DateTime.fromJSDate(new Date(proposal.end_date)).toRelative({ unit: 'days' })}
        </p>
        {proposal.description && <p className={styles.Description}>{proposal.description}</p>}
        <ul className={styles.OptionList}>
          {options.map((opt, index) => {
            return <li key={`${opt.opt}_${index}`}>{opt.opt}</li>;
          })}
        </ul>
        <div className={styles.ButtonContainer}>
          <button className={styles.SubmitButton}>Submit</button>
        </div>
      </div>
      <div className={styles.ResultsContainer}>
        <h3>Result</h3>
        <ul className={styles.OptionsContainer}>
          {options.map((opt, index) => (
            <li key={`${opt.opt}_${index}`} className={styles.OptionItemPoll}>
              <div className={styles.OptionPercentage}>
                <p>{opt.opt}</p>
                <p>
                  {percentage[`option_${index + 1}`]}- {getPercentage(percentage, index, totalPower)}%
                </p>
                {/* <p>
                  {votes
                    .filter((vote) => vote.opt_id === opt.id)
                    .map((vote) => vote.voting_power)
                    .reduce((prev, curr) => {
                      return prev + curr;
                    })}
                  - 100.00%
                </p> */}
              </div>
              <div className={styles.ProgressBarBackground}>
                <div
                  style={{ width: `${getPercentage(percentage, index, totalPower)}%` }}
                  className={styles.ProgressBar}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.VotesContainer}>
        <h3>{votes.length} votes</h3>
        <ul className={styles.VoterList}>
          {votes.map((vote, index) => (
            <li key={`${vote.opt_id}_${index}`}>
              <p>
                {vote.voter_addr} <span>( {vote.voting_power} SuperlativeSS )</span>
              </p>
              <p>{`${options.find((opt) => opt.id === vote.opt_id)?.opt}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProposalId;

//============================== USE BELOW LINES TO FETCH DATA FROM SERVER (GETSTATICPROPS & GETSTATICPATHS) ==============================

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const proposalId = params?.id;
//   console.log(proposalId);
//   // Fetching Data
//   const foundProposal = DUMMY_PROPOSALS.find((proposal) => proposal.id.toString() === proposalId);
//   const foundOption = DUMMY_OPTIONS.find((opt) => opt.proposal_id.toString() === proposalId);

//   const foundProposalSerialized = {
//     ...foundProposal,
//     end_date: foundProposal?.end_date.toLocaleString(),
//     created_at: foundProposal?.created_at.toLocaleString(),
//   };
//   const foundOptionSerialized = {
//     ...foundOption,
//     created_at: foundOption?.created_at.toLocaleString(),
//   };
//   return {
//     props: {
//       foundProposal: foundProposalSerialized,
//       foundOptions: foundOptionSerialized,
//     },
//   };
// };
