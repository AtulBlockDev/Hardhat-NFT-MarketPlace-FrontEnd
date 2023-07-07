import { useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { Modal, Input} from "web3uikit";
import NftMarketplace from "../constants/NftMarketplace.json"


export default function updateListingModal({nftAddress, tokenId, isVisible, marketplaceAddress, onClose}){
const[priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0)

const{runContractFunction: updateListing} = useWeb3Contract({

    abi:  NftMarketplace,
    contractAddress: marketplaceAddress,
    functionName: "updateListing",
    params: {
        nftAddress: nftAddress,
        tokenId: tokenId,
        newPrice: ethers.utils.parseUntis(priceToUpdateListingWith || "0")
    }

})

    return(
    <Modal isVisible = {isVisible} onCancel={{onClose}}>

        

        <Input label="Update listing price in L1 currency type (ETH)" 
               name = "update listing price" 
               type = "number"
               onChange={(event) =>{
                setPriceToUpdateListingWith(event.target.value)

               }}
               onOk = {()=>{
                updateListing()
                
                

    

               }}
               >
                
               
            
        </Input>
    </Modal>
    )
}