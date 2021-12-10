import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './new.module.scss';
import BackArrow from '../../assets/icons/BackArrow.svg';
import Link from 'next/link';

const NewProposal = () => {
  return (
    <Layout home={false}>
      <div className={styles.HeadingTitle}>
        <Link href='/' passHref>
          <Image width={30} height={30} src={BackArrow} alt='Back Arrow' />
        </Link>
        <h1>Create Proposal</h1>
      </div>
      <form className={styles.ProposalFormContainer}>
        <div className={styles.TitleInput}>
          <label htmlFor='Title'>Title</label>
          <input type='text' id='Title' />
        </div>
        <div className={styles.DescriptionInput}>
          <label htmlFor='Description'>Description</label>
          <textarea id='Description' cols={30} rows={10}></textarea>
        </div>

        <div className={styles.ChoicesContainer}>
          <label htmlFor='Choices'>Choices</label>
          <div className={styles.ChoicesSubHeading}>
            <p>Click &quot;Add&quot; button to add new choice.</p>
            <div className={styles.AddClearButtonContainer}>
              <button type='button' className={styles.ButtonAdd}>
                Add
              </button>
              <button type='button' className={styles.ButtonClear}>
                Clear All
              </button>
            </div>
          </div>
          <div id='Choices' className={styles.ChoicesInputContainer}>
            <input type='text' />
            <input type='text' />
            <input type='text' />
          </div>
        </div>

        <div className={styles.EndDate}>
          <label htmlFor='EndDate'>End Date</label>
          <input type='datetime-local' />
        </div>
        <div className={styles.PublishButton}>
          <button type='button'>Publish</button>
        </div>
      </form>
    </Layout>
  );
};

export default NewProposal;
