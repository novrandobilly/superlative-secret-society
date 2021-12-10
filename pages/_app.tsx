import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ProposalContextProvider from '../store/proposal-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProposalContextProvider>
      <Component {...pageProps} />
    </ProposalContextProvider>
  );
}

export default MyApp;
