import { useContext } from 'react';
import { ProposalContext } from '../store/proposal-context';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';
import ProposalListItem from '../components/ProposalListItem';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { ProposalsType } from '../models';

const Home: NextPage<{ foundProposal: { [key: string]: any } }> = ({ foundProposal }) => {
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
          {foundProposal.map((proposal: ProposalsType, index: number) => (
            <ProposalListItem {...proposal} key={`${proposal.title}_${index}`} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Home;
// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch('http://bros.superlativesecretsociety.com/proposal/all.php');
//   const resJSON = await res.json();
//   console.log(resJSON);

//   let paths = resJSON.map((data: { [key: string]: any }) => {
//     return {
//       params: { id: data.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch('http://bros.superlativesecretsociety.com/proposal/all.php');
  const resJSON = await res.json();

  return {
    props: {
      foundProposal: resJSON,
    },
  };
};
