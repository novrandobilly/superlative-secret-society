import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { DateTime } from 'luxon';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from './ProposalDetail.module.scss';

const ProposalId: React.FC<{ foundProposal: { [key: string]: any } }> = ({ foundProposal }) => {
  const router = useRouter();
  const [optionSelected, setOptionSelected] = useState<string>('');
  const [optionId, setOptionId] = useState<string>('');
  const [dateEnds, setDateEnds] = useState<{ [key: string]: any }>(
    DateTime.fromJSDate(new Date(foundProposal.end_date))
      .diff(DateTime.now(), ['months', 'days', 'hours', 'minutes'])
      .toObject()
  );
  const onSelectHandler = (event: React.MouseEvent, newValue: string, optionId: string): void => {
    event.preventDefault();
    setOptionSelected(newValue);
    setOptionId(optionId);
  };
  console.log(dateEnds);

  const onSubmitVoteHandler = async () => {
    const formData = new FormData();
    formData.append('proposal_id', foundProposal?.id || '');
    formData.append('voter_addr', '0xf5383b4e0d3EDDA3B6c091e51AbE58F882c98ce3');
    formData.append('voting_power', '1');
    formData.append('opt_id', optionId);
    if (new Date(foundProposal?.end_date) > new Date()) {
      try {
        const response = await fetch('http://bros.superlativesecretsociety.com/proposal/vote.php', {
          method: 'POST',
          body: formData,
        });
        const responseJSON = await response.json();
        if (!response.ok) {
          throw new Error(responseJSON.message);
        }
        router.push(`/proposal/detail/${foundProposal.id}`);
      } catch (err) {
        console.log(err, typeof err);
        return err;
      }
    }
  };
  return (
    <Layout home={false}>
      <div className={styles.QuestionsContainer}>
        <h1 className={styles.Title}>{foundProposal.title}</h1>

        {new Date(foundProposal.end_date) > new Date() ? (
          <p className={styles.DateEnds} suppressHydrationWarning>
            Ends in{' '}
            {parseInt(dateEnds.days) > 1
              ? `${dateEnds.days} days`
              : parseInt(dateEnds.hours) > 1
              ? `${dateEnds.hours} hours`
              : `${dateEnds.minutes} minutes`}
            {/* Ends {DateTime.fromJSDate(new Date(foundProposal.end_date)).toRelative({ unit: 'minutes' })} */}
          </p>
        ) : (
          <p className={styles.DateEndsClosed} suppressHydrationWarning>
            Closed
          </p>
        )}
        {foundProposal.description && <p className={styles.Description}>{foundProposal.description}</p>}
        {new Date(foundProposal.end_date) > new Date() && (
          <Fragment>
            <ul className={styles.OptionList}>
              {foundProposal.options.map((opt: { [key: string]: any }, index: number) => {
                return (
                  <li
                    key={`${opt.opt}_${index}`}
                    onClick={(e) => onSelectHandler(e, opt.opt, opt.id)}
                    style={{
                      backgroundColor: opt.opt === optionSelected ? '#0d6efd' : '#fff',
                      color: opt.opt === optionSelected ? '#fff' : '#0d6efd',
                    }}>
                    {opt.opt}
                  </li>
                );
              })}
            </ul>
            <div className={styles.ButtonContainer}>
              <button className={styles.SubmitButton} onClick={onSubmitVoteHandler}>
                Submit
              </button>
            </div>
          </Fragment>
        )}
      </div>
      <div className={styles.ResultsContainer}>
        <h3>Result</h3>
        <ul className={styles.OptionsContainer}>
          {foundProposal.calculated_voting_points.map((opt: { [key: string]: any }, index: number) => (
            <li key={`${opt.opt}_${index}`} className={styles.OptionItemPoll}>
              <div className={styles.OptionPercentage}>
                <p>{opt.opt}</p>
                <p>
                  {opt?.point}- {opt?.percentage}%
                </p>
              </div>
              <div className={styles.ProgressBarBackground}>
                <div style={{ width: `${opt?.percentage}%` }} className={styles.ProgressBar}></div>
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
  const res = await fetch('http://bros.superlativesecretsociety.com/proposal/all.php');
  const resJSON = await res.json();

  let paths = resJSON.map((data: { [key: string]: any }) => {
    return {
      params: { id: data.id },
    };
  });

  return {
    paths,
    fallback: false,
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
