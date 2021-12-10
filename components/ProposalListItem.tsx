import React from 'react';
import styles from './ProposalListItem.module.scss';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { ProposalsType } from '../models';

const ProposalListItem: React.FC<ProposalsType> = ({ title, created_at, publisher, description, id, end_date }) => {
  return (
    <Link passHref href={`/proposal/detail/${id.toString()}`}>
      <div className={styles.Container}>
        <h2>{title}</h2>
        <div className={styles.DateId}>
          <p>{DateTime.fromJSDate(created_at).toRelative({ unit: 'days' })} &nbsp;</p>
          <p>&bull;&nbsp;&nbsp;by {publisher}</p>
        </div>
        {description && <p>{description}</p>}
        <span
          style={{ backgroundColor: new Date() < new Date(end_date) ? '#00a308' : '#830000' }}
          className={styles.Status}>
          {new Date() < new Date(end_date) ? 'Open' : 'Closed'}
        </span>
      </div>
    </Link>
  );
};

export default ProposalListItem;
