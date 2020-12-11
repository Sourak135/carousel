import React from 'react';
import Carousel from "react-elastic-carousel"
import "./carouselMeta.css"

// Import des slides qui composent le carousel depuis le dossier local "img"
import Metamask1 from "./img/MetaMask11.png"
import Metamask2 from "./img/MetaMask22.png"
import Metamask3 from "./img/MetaMask44.png"
import Metamask4 from "./img/MetaMask55.png"

// Import des icônes qui composent la 3ème slide du carousel depuis le dossier local "img"
import browser1 from "./img/browserFirefox.png"
import browser2 from "./img/browserchrome.png"
import browser3 from "./img/browserBrave.png"
import browser4 from "./img/browserEdge.png"


// Seul et unique fonction fléchée du compoent 'CarouselMeta'
const CarouselMeta = () => {
  return (
    <div className="container">
      
      <Carousel >

{/*Paragraphe de code de la 1ère slide , fontSize:"5vl"*/}
          <div className="test"  style={{position:"relative"}}>
              <img className="card-title1 img-fluid" src={Metamask1} alt="Prérequis à l'utilisation de la blockchain"/>
              <div className="para para1">
                <p><b>Avant d'utiliser la blockchain, il nous faudra palier au coût généré par cette interaction.
                   Pour cela nous allons utiliser ce qu'on appelle un portefeuille numérique (wallet).</b></p>                
                <p><b>Ce wallet nous permettra donc d'y stocker une monnaie numérique (crypto monnaie) avec laquelle 
                  nous pourrons nous affranchir de la compensation nécessaire à l'utilisation du réseau Ethereum.</b></p>
              </div>              
          </div>

{/*Paragraphe de code de la 2ème slide*/}
          <div style={{position:"relative"}}>
              <img className="card-title2 img-fluid" src={Metamask2} alt="Le wallet MetaMask"/>
              <div className="para para2">
                <p><b>Pour nos premiers pas dans la blockchain, nous utiliserons le wallet : MetaMask.</b></p>                
                <p><b>Nous reviendrons en détail sur son principe de fonctionnement plus tard. Installons le sans plus attendre.</b></p>
              </div>
          </div>

{/*Paragraphe de code de la 3ème slide*/}
          <div style={{position:"relative"}}>
              <img className="card-title3 img-fluid" src={Metamask3} alt="Se procurer des ETH de test"/>
              <div className="para para3 px-2">
                <p className=""><b>METAMASK</b></p>
              
              
                <p><b>MetaMask s'intègre dans votre navigateur web très facilement.</b></p>
              
              
                <p className=""><b>Il nous suffit de l'ajouter en cliquant sur l'une des icônes suivantes en fonction du navigateur utilisé.</b></p>

{/*Paragraphe des icônes cliquables de la 3ème slide*/}                
                <div className="container py-4">
                  <a href="https://addons.mozilla.org/fr/firefox/addon/ether-metamask/" target="_blank" rel="noreferrer">
                    <img src={browser1} alt="icône de firefox" className="m-2"/>
                  </a>
                  <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=fr" target="_blank" rel="noreferrer">
                    <img src={browser2} alt="icône de crome" className="m-2"/>
                  </a>                    
                  <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=fr" target="_blank" rel="noreferrer">
                    <img src={browser3} alt="icône de brave" className="m-2"/>
                  </a>                      
                  <a href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=fr" target="_blank" rel="noreferrer">
                    <img src={browser4} alt="icône de edge" className="m-2"/>
                  </a>
                </div>
            </div>
          </div>

{/*Paragraphe de code de la 4ème slide*/}
          <div style={{position:"relative"}}>
              <img className="card-title4 img-fluid" src={Metamask4} alt="Se procurer des ETH de test"/>
              <div className="para para4">
                <p><b>Partie à venir</b></p>
                <p><b>Partie à venir</b></p>
            </div>
          </div>

    </Carousel>
    </div>
  );
}

export default CarouselMeta;