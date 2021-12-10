import React, { useState, useRef, useContext, FormEventHandler } from 'react';
import { ProposalContext } from '../../store/proposal-context';
import { OptionsType, ProposalsType } from '../../models';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './new.module.scss';
import BackArrow from '../../assets/icons/BackArrow.svg';
import Link from 'next/link';

const NewProposal = () => {
  const [numberOfChoices, setNumberOfChoices] = useState<number>(1);
  const [choicesArray, setChoicesArray] = useState<string[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const proposalCtx = useContext(ProposalContext);

  const onEditChoicesHandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setChoicesArray((prevState) => {
      let inputValue = event.target.value;
      let tempState = [...prevState];
      tempState[index] = inputValue;
      return tempState;
    });
  };

  let choicesBox = [];
  for (let i = 0; i < numberOfChoices; i++) {
    choicesBox.push(<input key={i} type='text' onChange={(e) => onEditChoicesHandler(e, i)} />);
  }

  const addChoiceHandler: () => void = () => {
    if (numberOfChoices < 4) setNumberOfChoices((prevState) => prevState + 1);
  };

  const onClearHandler: () => void = () => {
    setChoicesArray([]);
    setNumberOfChoices(1);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const proposalId = Math.floor(Math.random() * 10000 + 1);
    const proposalPayload: ProposalsType = {
      id: proposalId,
      title: titleRef.current?.value || '',
      description: descriptionRef.current?.value || '',
      end_date: new Date(endDateRef.current?.value || ''),
      publisher: `Anonymus_${Math.floor(Math.random() * 10000 + 1)}`,
      created_at: new Date(),
      PRIMARY_KEY: `${Math.floor(Math.random() * 10000 + 1)}`,
    };

    const optionsPayload: OptionsType = {
      id: Math.floor(Math.random() * 10000 + 1),
      proposal_id: proposalId,
      opt: choicesArray,
      created_at: new Date(),
      PRIMARY_KEY: `${Math.floor(Math.random() * 10000 + 1)}`,
    };

    proposalCtx.addProposal(proposalPayload);
    proposalCtx.addOption(optionsPayload);
  };

  console.log(proposalCtx.proposals);

  return (
    <Layout home={false}>
      <div className={styles.HeadingTitle}>
        <Link href='/' passHref>
          <div>
            <Image width={30} height={30} src={BackArrow} alt='Back Arrow' />
          </div>
        </Link>
        <h1>Create Proposal</h1>
      </div>
      <form className={styles.ProposalFormContainer} onSubmit={onSubmitHandler}>
        <div className={styles.TitleInput}>
          <label htmlFor='Title'>Title</label>
          <input type='text' id='Title' ref={titleRef} />
        </div>
        <div className={styles.DescriptionInput}>
          <label htmlFor='Description'>Description</label>
          <textarea id='Description' cols={30} rows={10} ref={descriptionRef}></textarea>
        </div>

        <div className={styles.ChoicesContainer}>
          <label htmlFor='Choices'>Choices</label>
          <div className={styles.ChoicesSubHeading}>
            <p>Click &quot;Add&quot; button to add new choice.</p>
            <div className={styles.AddClearButtonContainer}>
              <button type='button' className={styles.ButtonAdd} onClick={addChoiceHandler}>
                Add
              </button>
              <button type='button' className={styles.ButtonClear} onClick={onClearHandler}>
                Clear All
              </button>
            </div>
          </div>
          <div id='Choices' className={styles.ChoicesInputContainer}>
            {choicesBox}
          </div>
        </div>

        <div className={styles.EndDate}>
          <label htmlFor='EndDate'>End Date</label>
          <input type='datetime-local' ref={endDateRef} />
        </div>
        <div className={styles.PublishButton}>
          <button type='submit'>Publish</button>
        </div>
      </form>
    </Layout>
  );
};

export default NewProposal;
