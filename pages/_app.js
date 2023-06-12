import '@/styles/globals.css'
import {MoralisProvider} from "react-moralis"
import Header from "../components/Header"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache,
  uri: "https://api.studio.thegraph.com/query/47456/nftmarketplace/version/latest"
}

)

export default function App({ Component, pageProps }) {
  
  return (
    <div>
      <title>NFT MARKETPLACE</title>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </MoralisProvider>
    </div>
  );
}
