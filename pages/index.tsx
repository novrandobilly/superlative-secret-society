import { useContext } from 'react';
import { ProposalContext } from '../store/proposal-context';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';
import ProposalListItem from '../components/ProposalListItem';
import type { GetStaticProps } from 'next';

const Home: NextPage = () => {
  const proposalCtx = useContext(ProposalContext);
  return (
    <Layout home>
      <Head>
        <title>Superlative DAO</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className={styles.ProposalList}>
          {proposalCtx.proposals.map((proposal, index) => (
            <ProposalListItem {...proposal} key={`${proposal.title}_${index}`} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
