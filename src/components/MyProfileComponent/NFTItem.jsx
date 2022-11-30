import Image from 'next/image';
import React from 'react';

export default function NFTItem() {
  return (
    <div className=" rounded-2xl bg-main px-5 pt-12 pb-2">
      <Image className="w-full" src="/assets/images/vip-card.png" alt="" height={164} width={260} />
      <button className="btn-vip btn mt-8 w-full">GTA VIP PASS NFT</button>
    </div>
  );
}
