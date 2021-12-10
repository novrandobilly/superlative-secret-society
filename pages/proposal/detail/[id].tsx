import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProposalContext } from '../../../store/proposal-context';
import Layout from '../../../components/Layout';
import { DateTime } from 'luxon';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ProposalsType, OptionsType } from '../../../models';
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
  const [options, setOptions] = useState<string[]>([]);
  const proposalCtx = useContext(ProposalContext);
  const id = useRouter().query.id;

  useEffect(() => {
    const foundProposal = proposalCtx.proposals.find((proposal) => proposal.id.toString() === id);
    const foundOptions = proposalCtx.options.filter((opt) => opt.proposal_id.toString() === id).map((opt) => opt.opt);
    if (foundProposal) setProposal(foundProposal);
    if (foundOptions) setOptions(foundOptions);
  }, [proposalCtx.proposals, proposalCtx.options]);
  return (
    <Layout home={false}>
      <div className={styles.QuestionsContainer}>
        <h1 className={styles.Title}>{proposal.title}</h1>
        <p className={styles.DateEnds}>
          Ends {DateTime.fromJSDate(new Date(proposal.end_date)).toRelative({ unit: 'days' })}
        </p>
        {proposal.description && <p className={styles.Description}>{proposal.description}</p>}
        <ul className={styles.OptionList}>
          {options.map((opt, index) => {
            return <li key={`${opt}_${index}`}>{opt}</li>;
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
