import React, { Fragment, useState, useEffect } from 'react';
import styles from './Layout.module.scss';
import { ethers } from 'ethers';
import { initOnboard } from '../helpers/services';

let provider: any;

const Layout: React.FC<{ home: boolean }> = ({ children, home }) => {
  const [onboard, setOnboard] = useState<any>(null);
  const [walletAddr, setWalletAddr] = useState<string>('');
  const [wallet, setWallet] = useState<any>({});

  useEffect(() => {
    const onboard = initOnboard({
      wallet: (wallet: any) => {
        if (wallet.provider) {
          setWallet(wallet);
          provider = new ethers.providers.Web3Provider(wallet.provider, 'any');
          window.localStorage.setItem('selectedWallet', wallet.name);
          console.log(`${wallet.name} connected!`);
        } else {
          provider = null;
          setWallet({});
        }
      },
    });

    setOnboard(onboard);
  }, []);

  useEffect(() => {
    const previouslySelectedWallet = window.localStorage.getItem('selectedWallet');
    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet);
    }
  }, [onboard]);

  const readyToTransact = async () => {
    if (!provider) {
      const walletSelected = await onboard?.walletSelect();
      if (!walletSelected) return false;
    }

    const ready = await onboard?.walletCheck();
    return ready;
  };
  async function showState() {
    if (onboard != null) {
      try {
        const currentState = await onboard.getState();
        console.log(currentState);
        setWalletAddr(currentState['address']);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className={styles.Container}>
      <div className={styles.HeaderNav}>
        <h1>{home ? 'Proposals' : ''}</h1>

        <div className={styles.ButtonOnlyContainer}>
          <button
            onClick={async () => {
              await onboard?.walletSelect();
              console.log(wallet);
              showState();
            }}>
            Connect
          </button>

          {/* <button
              onClick={async () => {
                await onboard?.walletReset();
                console.log(wallet);
                setWalletAddr('');
              }}>
              Logout
            </button> */}
          {walletAddr && <p className={styles.WalletAddress}>{walletAddr}</p>}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
