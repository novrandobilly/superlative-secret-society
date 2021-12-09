import React, { Fragment } from 'react';
import styles from './Layout.module.scss';

const Layout: React.FC<{ home: boolean }> = ({ children, home }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeaderNav}>
        <h1>{home ? 'Proposals' : ''}</h1>
        <button>Connect</button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
