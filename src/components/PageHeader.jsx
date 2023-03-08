import React from "react";
const PageHeader = () => {
  return (
   <div className="bg-gradient-to-r from-[#090815] via-[#541f65] to-[#541f65] text-[#ffc107] drop-shadow">
     <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center py-4">
        <a href="#">NFT-Chip</a>
        <button className="text-lg border px-4 py-2 rounded border-[#ffc107]">Buy Nft</button>
      </div>
    </div>
   </div>
  );
};

export default PageHeader;
