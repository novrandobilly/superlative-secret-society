import Onboard from 'bnc-onboard';

const BLOCKNATIVE_KEY = '503f315a-1275-4a98-8470-ec8548f9b58a';
const NETWORK_ID = 1;

export function initOnboard(subscriptions: any) {
  return Onboard({
    dappId: BLOCKNATIVE_KEY,
    networkId: NETWORK_ID,
    networkName: 'Matic',
    subscriptions,
  });
}
