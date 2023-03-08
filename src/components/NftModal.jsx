import React from "react";
import { BsXLg } from "react-icons/bs";
import {FaEthereum} from "react-icons/fa"

const NftModal = ({ handleClose, selectedNFT }) => {
  return (
    <div
      onClick={handleClose}
      className="z-40 top-0 min-h-screen bg-[#101010c8] fixed w-full flex justify-center items-center"
    >
      <div className="lg:w-1/3 w-11/12 bg-white rounded-[5px] shadow-authModal md:px-8 px-4 py-8">
        <div className="flex justify-end">
          <BsXLg
            className="cursor-pointer"
            role="button"
            onClick={handleClose}
          />
        </div>
        {selectedNFT && (
          <div className="mt-3">
            <div className="md:w-3/4 w-full">
               <img
              src={selectedNFT.image}
              alt={selectedNFT.name}
              className="rounded-md"
            />
            </div>
           
            <div className="flex justify-between items-center mt-6">
              <p className="md:text-2xl text-xl">{selectedNFT.name}</p>
              <p className="md:text-xl text-lg flex gap-1 items-center"><FaEthereum/>{selectedNFT.price}ETH</p>
            </div>
            <p className="text-base my-3 font-medium">{selectedNFT.desc}</p>
            <div className="flex justify-end">
              <button className="py-2 px-6 bg-[#ffc107] text-lg">Buy NFT</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftModal;
