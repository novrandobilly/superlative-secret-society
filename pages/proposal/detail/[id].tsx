import React from 'react';
import Layout from '../../../components/Layout';
import { DateTime } from 'luxon';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ProposalsType, OptionsType } from '../../../models';
import styles from './ProposalDetail.module.scss';

interface foundProposalType {
  foundProposal: ProposalsType;
}

const DUMMY_PROPOSALS: ProposalsType[] = [
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
];

const DUMMY_OPTIONS: OptionsType[] = [
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
];

const ProposalId: React.FC<{ foundProposal: ProposalsType; foundOptions: OptionsType }> = ({
  foundProposal,
  foundOptions,
}) => {
  return (
    <Layout home={false}>
      <div className={styles.QuestionsContainer}>
        <h1 className={styles.Title}>{foundProposal.title}</h1>
        <p className={styles.DateEnds}>
          Ends {DateTime.fromJSDate(new Date(foundProposal.end_date)).toRelative({ unit: 'days' })}
        </p>
        {foundProposal.description && <p className={styles.Description}>{foundProposal.description}</p>}
        <ul className={styles.OptionList}>
          {foundOptions.opt.map((option, index) => {
            return <li key={`${option}_${index}`}>{option}</li>;
          })}
        </ul>
        <div className={styles.ButtonContainer}>
          <button className={styles.SubmitButton}>Submit</button>
        </div>
      </div>
      <div className={styles.ResultsContainer}>
        <h3>Result</h3>
        <ul className={styles.OptionsContainer}>
          <li className={styles.OptionItemPoll}>
            <div className={styles.OptionPercentage}>
              <p>WE LIKE ART!!!</p>
              <p>120 - 100.00%</p>
            </div>
            <div className={styles.ProgressBarBackground}>
              <div className={styles.ProgressBar}></div>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.VotesContainer}>
        <h3>(number) votes</h3>
        <ul className={styles.VoterList}>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 5 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 22 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 15 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 5 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 22 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 15 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 5 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 22 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
          <li>
            <p>
              0x080353f64c6d7c8a4a592c6211224a5f4060fc53 <span>( 15 SuperlativeSS )</span>
            </p>
            <p>WE LIKE ART!!!</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ProposalId;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const proposalId = params?.id;
  console.log(proposalId);
  // Fetching Data
  const foundProposal = DUMMY_PROPOSALS.find((proposal) => proposal.id.toString() === proposalId);
  const foundOption = DUMMY_OPTIONS.find((opt) => opt.proposal_id.toString() === proposalId);

  const foundProposalSerialized = {
    ...foundProposal,
    end_date: foundProposal?.end_date.toLocaleString(),
    created_at: foundProposal?.created_at.toLocaleString(),
  };
  const foundOptionSerialized = {
    ...foundOption,
    created_at: foundOption?.created_at.toLocaleString(),
  };
  return {
    props: {
      foundProposal: foundProposalSerialized,
      foundOptions: foundOptionSerialized,
    },
  };
};
