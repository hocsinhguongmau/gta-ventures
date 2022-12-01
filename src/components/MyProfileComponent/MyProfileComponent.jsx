import useMetaMask from '@hooks/useMetamask';
import { formatAddress } from '@services/frontend';
import Image from 'next/image';
import React from 'react';
import NFTItem from './NFTItem';
import { useGetMintableNftQuery } from '../../hooks/query';
import { PROJECT_CONTRACT } from '../../constants/index';

export default function MyProfileComponent() {
  const { account, web3Instance } = useMetaMask();

  const { data: minableNft = 0 } = useGetMintableNftQuery(web3Instance, PROJECT_CONTRACT);
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
          <Image
            src="/assets/images/footer-logo.png"
            className="mx-auto"
            alt=""
            width={101}
            height={89}
          />
        </div>
        <div>
          <p className="text-[18px] font-semibold">
            Wallet: <span className="ml-8 inline-block text-main">{formatAddress(account)}</span>
          </p>
          <p className="mt-2 text-[18px] font-semibold">
            NFTs: <span className="ml-8 inline-block text-main">{minableNft}</span>
          </p>
        </div>
      </div>
      <p className="mt-14 text-[18px] text-main">{`NFTs (${minableNft})`}</p>
      {minableNft ? (
        <div className="mt-7 grid grid-cols-3 gap-20">
          <NFTItem />
        </div>
      ) : (
        <p className="mt-7">You have no item</p>
      )}
    </div>
  );
}
