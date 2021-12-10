import React from 'react';
import Layout from '../../components/Layout';
import styles from './new.module.scss';

const NewProposal = () => {
  return (
    <Layout home={false}>
      <div className={styles.HeadingTitle}>
        <h1>Create Proposal</h1>
      </div>
      <form className={styles.ProposalFormContainer}>
        <div>
          <label htmlFor='Title'>Title</label>
          <input type='text' id='Title' />
        </div>
        <div>
          <label htmlFor='Description'>Description</label>
          <textarea id='Description' cols={30} rows={10}></textarea>
        </div>

        <div>
          <label htmlFor='Choices'>Choices</label>
          <p>Click "Add" button to add new choice.</p>
          <div id='Choices'>
            <input type='text' />
            <input type='text' />
            <input type='text' />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default NewProposal;
