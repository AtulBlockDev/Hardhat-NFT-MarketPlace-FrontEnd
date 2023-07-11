import NftBox from "@/components/NFTBox";   
import { useMoralis } from "react-moralis";
import networkMapping from "../constants/networkMapping.json"

import { useQuery } from "@apollo/client";
import GET_ACTIVE_ITEMS from "@/constants/subgraphQueries";

export default function Home() {
  //show the recntly listed NFTs

  const { chainId, isWeb3Enabled, account } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : null;
  const marketplaceAddress = chainId ? networkMapping[chainString].NftMarketPlace[0]
    : null;

  

  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);


  return (
    <div className="container mx-auto">
      <h1 className="py-4 px-4 font-bold text-2xl"> Recently Listed NFTs</h1>
      <div className="flex flex-wrap">
    

    


        
      
        {isWeb3Enabled && chainId ? (
          loading || !listedNfts ? (
            <div>Some issue with data loadig..........</div>
          ) : (
            listedNfts.activeItems.map((nft) => {
              const { seller, nftAddress, tokenId, price } = nft;
              
             

              return marketplaceAddress ? (
                <NftBox
                  key={`${nftAddress}${tokenId}`}
                  nftAddress={nftAddress}
                  tokenId={tokenId}
                  price={price}
                  seller={seller}
                  marketplaceAddress={marketplaceAddress}
                />
                
              ) : (
                <div> Network error, please switch to a supported network </div>
              );
            })
          )
        ) : (
          <div> Web3 Not enabled </div>
        )}
      </div>
    </div>
  );
 
  
}