import React from 'react';
import styles from './ProposalListItem.module.scss';
import { DateTime } from 'luxon';
import Link from 'next/link';

interface ProposalListItemType {
  title: string;
  datePosted: string;
  authorId: string;
  description?: string;
  status: 'open' | 'closed';
  id: string;
}
const ProposalListItem: React.FC<ProposalListItemType> = ({ title, datePosted, authorId, description, status, id }) => {
  return (
    <Link passHref href={`/proposal/detail/${id}`}>
      <div className={styles.Container}>
        <h2>{title}</h2>
        <div className={styles.DateId}>
          <p>{DateTime.fromJSDate(new Date(datePosted)).toRelative({ unit: 'days' })} &nbsp;</p>
          <p>&bull;&nbsp;&nbsp;by {authorId}</p>
        </div>
        {description && <p>{description}</p>}
        <span style={{ backgroundColor: status === 'open' ? '#00a308' : '#830000' }} className={styles.Status}>
          {status === 'open' ? 'Open' : 'Closed'}
        </span>
      </div>
    </Link>
  );
};

export default ProposalListItem;
