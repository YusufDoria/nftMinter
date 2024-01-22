import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NFTList() {
    // const [nfts, setNfts] = useState([]);

    // useEffect(() => {
    //     // Replace this URL with your API endpoint or source of NFT data
    //     axios.get('https://example.com/api/nfts')
    //         .then(response => {
    //             setNfts(response.data);
    //         })
    //         .catch(error => console.error('Error fetching NFT data:', error));
    // }, []);

    const nfts = [
        {
        "id": "1",
        "title": "Digital Artwork #1",
        "description": "This is a unique digital artwork.",
        "image": "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
        "creator": "Artist A",
        "price": "1 ETH"
        },
        {
        "id": "2",
        "title": "Virtual World Item",
        "description": "A rare item from a virtual world game.",
        "image": "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
        "creator": "Game Studio B",
        "price": "0.5 ETH"
        },
        {
        "id": "3",
        "title": "3D Model",
        "description": "A high-quality 3D model of a futuristic car.",
        "image": "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
        "creator": "Designer C",
        "price": "0.8 ETH"
        }

    ]          
    return (
        <div className='nft-list'>
            {nfts.map(nft => (
                <div className="nft-item" key={nft.id}>
                    <img className="nft-image" src={nft.image} alt={nft.title} />
                    <h3 className='nft-title'>{nft.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default NFTList;
