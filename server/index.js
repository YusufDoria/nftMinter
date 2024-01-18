const express = require('express')
const app = express();
const cors = require('cors');
const db = require('./firebase')
const { FieldValue } = require('firebase-admin/firestore');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
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

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
//   });

app.listen(3001)