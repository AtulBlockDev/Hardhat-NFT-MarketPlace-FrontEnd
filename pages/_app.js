import '@/styles/globals.css'
import {MoralisProvider} from "react-moralis"
import Header from "../components/Header"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NotificationProvider } from 'web3uikit';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/48703/graph-nftmp/version/latest",
});

export default function App({ Component, pageProps }) {
  
  return (
    <div>
      <title>NFT MARKETPLACE</title>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <NotificationProvider>
            <Header />
            <Component {...pageProps} />
          </NotificationProvider>
        </ApolloProvider>
      </MoralisProvider>
    </div>
  );
}
