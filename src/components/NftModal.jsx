import React from "react";
import { BsXLg } from "react-icons/bs";
import {FaEthereum} from "react-icons/fa"

const NftModal = ({ handleClose, selectedNFT }) => {
  return (
    <div
      onClick={handleClose}
      className="z-40 top-0 min-h-screen bg-[#101010c8] fixed w-full flex justify-center items-center"
    >
      <div className="lg:w-1/3 w-11/12 bg-white rounded-[5px] shadow-authModal p-8">
        <div className="flex justify-end">
          <BsXLg
            className="cursor-pointer"
            role="button"
            onClick={handleClose}
          />
        </div>
        {selectedNFT && (
          <div className="mt-3">
            <img
              src={selectedNFT.image}
              alt={selectedNFT.name}
              className="rounded-md"
            />
            <div className="flex justify-between items-center mt-6">
              <p className="text-2xl">{selectedNFT.name}</p>
              <p className="text-xl flex gap-1 items-center"><FaEthereum/>{selectedNFT.price}ETH</p>
            </div>
            <p className="text-base mt-3">{selectedNFT.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftModal;
