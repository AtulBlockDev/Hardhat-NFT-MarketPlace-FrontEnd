import { useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { Modal, Input, useNotification} from "web3uikit";
import NftMarketplace from "../constants/NftMarketplace.json"
import {ethers} from "ethers"



export default function UpdateListingModal({nftAddress, tokenId, isVisible, marketplaceAddress, onClose}){
const[priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0)

const dispatch = useNotification()

const handleUpdateListingSuccess = async (tx) => {
    await tx.wait(1)
    dispatch({
        type:"sucess",
        message: "Listing Updated!",
        title:"Listing Updated, Refresh The Page!",
        position: "topR"

    })
    onClose && onClose()
    setPriceToUpdateListingWith("0")
}

const{runContractFunction: updateListing} = useWeb3Contract({

    abi:  NftMarketplace,
    contractAddress: marketplaceAddress,
    functionName: "updateListing",
    params: {
        nftAddress: nftAddress,
        tokenId: tokenId,
        newPrice: ethers.utils.parseEther(priceToUpdateListingWith || "0"),
    },

})

    return (
      <Modal
        isVisible={isVisible}
        onCancel={{ onClose }}
        onOk={() => {
          updateListing({
            onError: (error) =>{
                console.log(error)

            },
            onSuccess: handleUpdateListingSuccess,
          });
        }}
      >
        <Input
          label="Update listing price in L1 currency type (ETH)"
          name="update listing price"
          type="number"
          onChange={(event) => {
            setPriceToUpdateListingWith(event.target.value);
          }}
        ></Input>
      </Modal>
    );
}