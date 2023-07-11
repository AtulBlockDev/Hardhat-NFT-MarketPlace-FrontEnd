import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import BasicNft from "../constants/BasicNft.json";
import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import {networkMapping} from "../constants/networkMapping.json"
import Image from "next/image";
import { Card, useNotification } from "web3uikit";
import UpdateListingModal from "./updateListingModal";
import { ethers } from "ethers";


export default function NftBox({nftAddress, tokenId, price, seller, marketplaceAddress }){
    const [imageURI,  setImageURI] = useState("")
    const {isWeb3Enabled, account} = useMoralis()
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")
    const [showModal, setShowModal] = useState(false)
    const hideModal = ()=> setShowModal(false)

    const dispatch = useNotification()
    
    
    const handleBuyItemSuccess =  () => {
      
    
    dispatch({
        type:"sucess",
        message: "ItemBought!",
        title:"You have Bought the Item!, Refresh The Page!",
        position: "topR"

    })
  }

   const { runContractFunction: getTokenURI } = useWeb3Contract({
     abi: BasicNft,
     contractAddress: nftAddress,
     functionName: "tokenURI",
     params:{
      tokenId: tokenId,
     },
     
     
    
   })

   const {runContractFunction: buyItem} = useWeb3Contract({
    abi: nftMarketplaceAbi,
    contractAddress: marketplaceAddress,
    functionName: "buyitem",
    msgValue: price,
    params:{
      nftAddress: nftAddress,
      tokenId: tokenId,

    }
   })


    async function updateUI(){
    
      
        const tokenURI = await getTokenURI()
        
        console.log(`The TokenURI is ${tokenURI}`)
        // We are going to cheat a little here...
        if (tokenURI) {
            // IPFS Gateway: A server that will return IPFS files from a "normal" URL.
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json() // fetching the content of IPFS link, i.e metadata of the nft.
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setImageURI(imageURIURL)
            setTokenName(tokenURIResponse.name)
            setTokenDescription(tokenURIResponse.description)
        }


        //get the tokenURI and then get the imageURI
    }
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
        
    }, [isWeb3Enabled])

     const isOwnedByUser = seller === account || seller === undefined;
     const formatedSellerAccount = isOwnedByUser ? "you" : seller;

     const handleCardClick = ()=> {
      isOwnedByUser ? setShowModal(true) : buyItem({
        onError: (error)=> console.log(error),
        onSuccess: ()=> handleBuyItemSuccess()
      })
     }
              

    return (
      <div>
        <div>
          {imageURI ? (
            <div>
              <UpdateListingModal
                isVisible={showModal}
                nftAddress={nftAddress}
                tokenId={tokenId}
                marketplaceAddress={marketplaceAddress}
                onClose={hideModal}
              />

              <Card
                title={tokenName}
                description={tokenDescription}
                onClick={handleCardClick}
              >
                <div>{tokenId}</div>
                <div>Owned By {formatedSellerAccount}</div>
                <div className="font-bold">
                  {ethers.utils.formatUnits(price, "ether")} ETH
                </div>
                <Image
                  loader={() => imageURI}
                  src={imageURI}
                  height="200"
                  width="200"
                />{" "}
              </Card>
            </div>
          ) : (
            <div>Image URI is not valid or undefined</div>
          )}
        </div>
      </div>
    );
        

} 