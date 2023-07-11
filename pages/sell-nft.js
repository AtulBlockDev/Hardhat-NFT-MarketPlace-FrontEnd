import { Form, useNotification, Button } from "web3uikit";
import {ethers} from "ethers"
import { useMoralis, useWeb3Contract } from "react-moralis";
import networkMapping from "../constants/networkMapping.json";
import nftAbi from "../constants/BasicNft.json"
import marketplaceAbi from "../constants/NftMarketplace.json"
import { useState, useEffect } from "react";




export default function Home() {
  
  const {chainId, account, isWeb3Enabled} = useMoralis()
  const chainString = chainId ? parseInt(chainId).toString() : null;
  const marketplaceAddress = chainId ? networkMapping[chainString].NftMarketPlace[0] : null;
  const [proceeds, setProceeds] = useState("0");

  const dispatch = useNotification()

  const {runContractFunction} = useWeb3Contract();

  async function approveAndList(data) {
    const nftAddress = data.data[0].inputResult;
    const tokenId = data.data[1].inputResult;
    const price = ethers.utils.parseUnits(data.data[2].inputResult, "ether").toString()

    const approveOptions = {
      abi: nftAbi,
      contractAddress: nftAddress,
      functionName: "approve",
      params:{
        to: marketplaceAddress,
        tokenId: tokenId,
      },
   }

   await runContractFunction({
    params: approveOptions,
    onSuccess: () => handleApproveSucess(nftAddress, tokenId, price)  ,
    onError: (error) => console.log(error)
   })
 }
 async function handleApproveSucess(nftAddress, tokenId, price){

  const approveOptions = {
    abi: marketplaceAbi,
    contractAddress: marketplaceAddress,
    functionName: "listItem",
    params:{
      nftAddress: nftAddress,
      tokenId: tokenId,
      price: price
    }
  }
  await runContractFunction({
    params: approveOptions,
    onSuccess: () => handleListSuccess(),
    onError: (error) => console.log(error)

  })

 }
 async function handleListSuccess(){
  dispatch({
    type:"sucess",
    message: "You Have Listed NFT!",
    title:"You have Listed the Item!, Refresh The Page!",
    position: "topR"

  })
}
async function handleWithdrawSuccess(){
  dispatch({
    type: "sucess",
    message: "Money Withdrawn",
    title: "You have withdrawn your funds!, Refresh The Page!",
    position: "topR",
  });

}

async function showProceeds(){
  const availableProceeds = await runContractFunction({
    params:{
    abi: marketplaceAbi,
    contractAddress: marketplaceAddress,
    functionName: "getProceeds",
    params:{
      seller: account,
    },
    onError: (error) => console.log(error)
  }
  })
  
  if(availableProceeds){
    setProceeds(availableProceeds.toString())
  }
}
useEffect(() => {
  showProceeds()
}, [proceeds, account, isWeb3Enabled, chainId ])

  return (
    <div>
      <Form
        onSubmit={approveAndList}
        data={[
          {
            name: "NFT Address",
            type: "text",
            inputWidth: "50%",
            value: "",
            key: "nftAddress",
          },
          {
            name: "Token Id",
            type: "number",
            value: "",
            key: "nftAddress",
          },
          {
            name: "Price (in ETH)",
            type: "number",
            value: "",
            key: "price",
          },
        ]}
        title="Sell your NFt"
        id="Main Form"
      />

      <div className="text-white font-bold mx-20">
        You have:{" "}
        <span
          className="text-red-300 font-bold 
        bg-black mx-2 px-2 rounded"
        >
          {" "}
          {proceeds}{" "}
        </span>{" "}
        Proceeds
      </div>
      {proceeds != "0" ? (
        <Button
         onClick={() =>
            runContractFunction({
              params: {
                abi: marketplaceAbi,
                contractAddress: marketplaceAddress,
                functionName: "withdrawProceeds",
                params: {},
              },
              onError: (error) => console.log(error),
              onSuccess: () => handleWithdrawSuccess,
            })
          }
          text="withdraw"
          type="button"
          class = "mx-20 my-5 bg-blue-900 px-2  rounded font-bold hover:bg-green-600"
        />
      ) : (
        <div>No Proceeds Available</div>
      )}
    </div>
  );
}
