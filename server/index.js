const express = require('express')
const app = express();
const cors = require('cors');
const db = require('./firebase')
const { FieldValue } = require('firebase-admin/firestore');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const sdk = require('api')('@opensea/v2.0#2cd9im1dlr9rw9li');
const { ethers } = require('ethers');
const { AlchemyProvider } = require('@ethersproject/providers');
const erc20abi = require('./erc20abi.json')
const contractAddress = process.env.CONTRACT_ADDRESS
const provider = new AlchemyProvider('maticmum', process.env.ALCHEMY_API_KEY);



app.use(express.static(path.join(__dirname + "/build")));

app.use(cors());
app.use(bodyParser.json());

app.get('/test', async (req, res) => {
    console.log('test')
});

app.post('/mint', async(req,res) => {
    try {
        const {address, uri} = req.body;
        console.log(address)
        console.log(uri)
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
        const erc20 = new ethers.Contract(contractAddress, erc20abi, signer);
        await erc20.safeMint(address, uri)
        res.json({ success: true });
      }
    catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})
app.post("/createUser", async (req, res) => {
    try {
        const { address } = req.body;
        const userRef = db.collection("users").doc(address)
        userRef.set({
            nfts: [],
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});
app.get("/getUser/:address", async (req, res) => {
    try {
        const { address } = req.params;
        const userRef = db.collection("users").doc(address)
        const user = await userRef.get()
        if (!user.exists) {
            res.json({ success: false })
        } else {
            res.json({ success: true, user: user.data() })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});
app.get("/getAllNFTs", async (req, res) => {
    try {
        sdk.auth('0f465c0014c4401499a5e45db88ac6a2');
        sdk.server('https://testnets-api.opensea.io');
        sdk.list_nfts_by_contract({ chain: 'mumbai', address: process.env.CONTRACT_ADDRESS })
            .then((data) => {
                res.json({ success: true, data: data })
            })
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});  
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
//   });

app.listen(3001)