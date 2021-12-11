import React, { useContext, useEffect, useState } from 'react';

import Layout from '../../../components/Layout';
import { DateTime } from 'luxon';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from './ProposalDetail.module.scss';

const ProposalId: React.FC<{ foundProposal: { [key: string]: any } }> = ({ foundProposal }) => {
  console.log(foundProposal);

  const getPercentage = (object: { [option: string]: number }, index: number, power: number): string => {
    return ((object[`option_${index + 1}`] * 100) / power).toFixed(1);
  };

  return (
    <Layout home={false}>
      <div className={styles.QuestionsContainer}>
        <h1 className={styles.Title}>{foundProposal.title}</h1>
        <p className={styles.DateEnds} suppressHydrationWarning>
          Ends {DateTime.fromJSDate(new Date(foundProposal.end_date)).toRelative({ unit: 'days' })}
        </p>
        {foundProposal.description && <p className={styles.Description}>{foundProposal.description}</p>}
        <ul className={styles.OptionList}>
          {foundProposal.options.map((opt: { [key: string]: any }, index: number) => {
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
          {foundProposal.options.map((opt: { [key: string]: any }, index: number) => (
            <li key={`${opt.opt}_${index}`} className={styles.OptionItemPoll}>
              <div className={styles.OptionPercentage}>
                <p>{opt.opt}</p>
                <p>
                  {foundProposal.calculated_voting_points[index]?.point}-{' '}
                  {foundProposal.calculated_voting_points[index]?.percentage}%
                </p>
              </div>
              <div className={styles.ProgressBarBackground}>
                <div
                  style={{ width: `${foundProposal.calculated_voting_points[index]?.percentage}%` }}
                  className={styles.ProgressBar}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.VotesContainer}>
        <h3>{foundProposal.votes.length} votes</h3>
        <ul className={styles.VoterList}>
          {foundProposal.votes.map((vote: { [key: string]: any }, index: number) => (
            <li key={`${vote.opt_id}_${index}`}>
              <p>
                {vote.voter_addr} <span>( {vote.voting_power} SuperlativeSS )</span>
              </p>
              <p>{`${foundProposal.options.find((opt: { [key: string]: any }) => opt.id === vote.opt_id)?.opt}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProposalId;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '21' } }, { params: { id: '2' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const proposalId = params?.id;
  let res, resJSON;
  try {
    res = await fetch(`http://bros.superlativesecretsociety.com/proposal/id.php?id=${proposalId}`);
    resJSON = await res.json();
  } catch (err) {
    console.log(err);
    resJSON = err;
  }
  return {
    props: {
      foundProposal: resJSON,
    },
  };
};
