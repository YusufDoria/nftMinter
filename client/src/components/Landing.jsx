import React,{useEffect, useState} from 'react'
import { ethers } from "ethers";  

export default function Landing() {
  return (
    <div>
        <h1>Landing</h1>
    </div>
  )
}


// async function mintToken(uri) {
//     if (!window.ethereum) {
//         console.log("Please install MetaMask");
//         return;
//     }

//     try {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const erc20 = new ethers.Contract(contractAddress, contractABI, signer);

//         const transaction = await erc20.safeMint(signer.getAddress(), uri);
//         await transaction.wait();
//         console.log("Minted token successfully");
//     } catch (error) {
//         console.error("Error minting token:", error);
//     }
// }
