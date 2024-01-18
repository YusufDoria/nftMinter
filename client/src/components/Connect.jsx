import { ethers } from 'ethers';

export default function Connect () {
    async function walletConnect() {
        if (window.ethereum) {
            try {
                const addressArray = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                // More code to handle the connected wallet
                return addressArray[0];
            } catch (err) {
                return "Error: " + err.message;
            }
        } else {
            return "Please install MetaMask.";
        }
    }

    return (
        <div>
            <h1>Connect</h1>
        </div>
    )
}
