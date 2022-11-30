import { formatAddress } from '@services/frontend';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between pt-10">
      <div className="flex flex-row items-center gap-16">
        <Link href="/">
          <Image src="/assets/images/logo.png" alt="" width={133} height={33} />
        </Link>
        <ul className="navigation flex flex-row gap-12">
          <li className="text-[18px] font-semibold uppercase">
            <Link href="/" className="active text-white hover:text-main">
              Mint nfts
            </Link>
          </li>
          <li className="text-[18px] font-semibold uppercase">
            <Link href="/" className="text-white hover:text-main">
              Blog
            </Link>
          </li>
          <li className="text-[18px] font-semibold uppercase">
            <Link href="/" className="text-white hover:text-main">
              Partner
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-4">
        <span className="block h-12 w-12 rounded-full bg-[#043648]">
          <Image
            src="/assets/images/currency.png"
            width={17}
            height={28}
            alt=""
            className="mx-auto mt-2.5"
          />
        </span>
        {/* Not login */}
        <button className="btn-ghost btn">Connect Wallet</button>
        {/* Logged in */}
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="m-1 rounded-full border border-main px-6 py-3 text-main">
            {formatAddress('0x252123456sdsads')}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box mt-4 w-52 bg-[#040f18] p-2 text-center"
          >
            <li>
              <Link href="/my-profile" className="block focus:bg-transparent">
                Your NFTs
              </Link>
            </li>
            <li>
              <button className="mx-auto text-red-500 focus:bg-transparent">Log out</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
