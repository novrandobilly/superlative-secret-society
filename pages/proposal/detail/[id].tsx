import React from 'react';
import Layout from '../../../components/Layout';
import { DateTime } from 'luxon';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from './ProposalDetail.module.scss';

interface DummyDataType {
  id: string;
  authorId: string;
  title: string;
  dateEnds: string;
  description?: string;
  options: string[];
}

interface foundProposalType {
  foundProposal: DummyDataType;
}

const DUMMY_DATA: DummyDataType[] = [
  {
    id: 's1',
    authorId: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    title: 'Do you like art?',
    dateEnds: new Date('06/17/2022').toLocaleDateString(),
    description: 'To determine how much you like the art.',
    options: ['Yes', 'Of Course', 'WE LIKE THE ART!!!'],
  },
  {
    id: 's2',
    authorId: '0x4e0843e8daa53406121588feebf0cde0f1fcefc1',
    title: 'Which should comes first?',
    dateEnds: new Date('02/21/2022').toLocaleDateString(),
    options: ['Chicken', 'Egg', 'Repus'],
  },
];

const ProposalId: React.FC<foundProposalType> = ({ foundProposal }) => {
  return (
    <Layout home={false}>
      <div className={styles.QuestionsContainer}>
        <h1 className={styles.Title}>{foundProposal.title}</h1>
        <p className={styles.DateEnds}>
          Ends {DateTime.fromJSDate(new Date(foundProposal.dateEnds)).toRelative({ unit: 'days' })}
        </p>
        {foundProposal.description && <p className={styles.Description}>{foundProposal.description}</p>}
        <ul className={styles.OptionList}>
          {foundProposal.options.map((option, index) => {
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
    paths: [{ params: { id: 's1' } }, { params: { id: 's2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const foundProposal = DUMMY_DATA.filter((data) => data.id === params?.id);
  return {
    props: {
      foundProposal: foundProposal[0],
    },
  };
};
