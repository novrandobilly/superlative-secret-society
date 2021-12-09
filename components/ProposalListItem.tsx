import React from 'react';
import styles from './ProposalListItem.module.scss';
import { DateTime } from 'luxon';

interface ProposalListItemType {
  title: string;
  datePosted: Date;
  id: string;
  description?: string;
  status: 'open' | 'closed';
}
const ProposalListItem: React.FC<ProposalListItemType> = ({ title, datePosted, id, description, status }) => {
  return (
    <div className={styles.Container}>
      <h3>{title}</h3>
      <div>
        <p>{DateTime.fromJSDate(datePosted).toLocaleString(DateTime.DATE_FULL)}</p>
        <p>&bull; by {id}</p>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ProposalListItem;
