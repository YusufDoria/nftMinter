import React,{useEffect, useState} from 'react'
import Navbar from './Navbar';
import NFTList from './NFTList';
import "../App.css";

export default function Landing() {
  return (
    <div>
        <Navbar/>
        <NFTList/>
    </div>
  )
}


