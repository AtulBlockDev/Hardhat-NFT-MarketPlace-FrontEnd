import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import basicNftAbi from  "../constants/BasicNft.json"
import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import {networkMapping} from "../constants/networkMapping.json"

export default function NftBox({nftAddress, tokenId, price, seller, marketplaceAddress }){
    const [imageURI,  setImageURI] = useState("")
    const {isWeb3Enabled} = useMoralis()
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")

   const { runContractFunction: getTokenURI } = useWeb3Contract({
     abi: basicNftAbi,
     contractAddress: nftAddress,
     functionName: "tokenURI",
    
   });


    async function updateUI(){
         const tokenURI = await getTokenURI()
        console.log(`The TokenURI is ${tokenURI}`)
        // We are going to cheat a little here...
        if (tokenURI) {
            // IPFS Gateway: A server that will return IPFS files from a "normal" URL.
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json()
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
        else{
          console.log("Web3NotEnabled")
        }
    }, [isWeb3Enabled])

    return (
      <div>
        <div>{imageURI ? <div>Found it!</div> : <div>Loading.......</div>}</div>
      </div>
    )
        

}