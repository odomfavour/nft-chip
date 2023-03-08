import { useState, useEffect } from "react";
import { nfts } from "./data/data";
import "./App.css";
import PageHeader from "./components/PageHeader";
import NftModal from "./components/NftModal";
import {FaEthereum} from "react-icons/fa"

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);

  const displayNFT = (nft) => {
    setSelectedNFT(nft);
    setOpenModal(true);
  };

  useEffect(() => {
    const getNfts = () => {
      fetch("https://testnets-api.opensea.io/v2/orders/goerli/seaport/listings")
        .then(response => response.json())
        .then(data => {
          console.log(data)
        });
    };
    getNfts();
  }, []);
  
  

  return (
    <div className="text-3xl font-bold min-h-screen bg-gradient-to-tr from-[#090815] via-[#aa37cf] to-[#090815] font-sora">
      <PageHeader />
      <div className="w-11/12 mx-auto">
        <h5 className="md:text-4xl text-lg my-5 text-[#ffc107]"><span className="text-white">Amazing</span> and Super Unique Art of this <span className="text-white">Week</span></h5>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-10">
          {nfts.map((nft) => (
            <div
              className="p-4 backdrop-blur-lg
          [ p-8 md:p-10 lg:p-10 ]
          [ bg-gradient-to-b from-white/60 to-white/30 ]
          [ border-[1px] border-solid border-white border-opacity-30 ]
          [ shadow-black/70 shadow-2xl ] rounded-md"
              key={nft.id}
              role="button"
              onClick={() => displayNFT(nft)}
            >
              <img src={nft.image} alt={nft.name} />
              <div>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-2xl">{nft.name}</p>
                  <p className="text-xl flex gap-2 items-center"><FaEthereum/>{nft.price}ETH</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openModal && <NftModal handleClose={() => setOpenModal(false)} selectedNFT={selectedNFT} />}
    </div>
  );
}

export default App;
