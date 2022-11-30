import { formatAddress } from '@services/frontend';
import Image from 'next/image';
import React from 'react';
import NFTItem from './NFTItem';

export default function MyProfileComponent() {
  return (
    <div>
      <h1
        className="mt-16 text-center text-xl font-extrabold uppercase"
        style={{ letterSpacing: '1.645em' }}
      >
        PROFILE
      </h1>
      <div className="mt-5 flex flex-row items-center gap-14 rounded-2xl bg-[#042238]">
        <div className="w-[259px] shrink-0 grow-0 rounded-2xl bg-[#00121f] pt-1 pb-4">
          <Image src="/assets/images/footer-logo.png" className="mx-auto" width={101} height={89} />
        </div>
        <div>
          <p className="text-[18px] font-semibold">
            Wallet:{' '}
            <span className="ml-8 inline-block text-main">
              {formatAddress('0x252123123sdsads')}
            </span>
          </p>
          <p className="mt-2 text-[18px] font-semibold">
            NFTs: <span className="ml-8 inline-block text-main">1</span>
          </p>
        </div>
      </div>
      <p className="mt-14 text-[18px] text-main">NFTs (1)</p>
      <div className="mt-7 grid grid-cols-3 gap-20">
        <NFTItem />
      </div>
    </div>
  );
}
