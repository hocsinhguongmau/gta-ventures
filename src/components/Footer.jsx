import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGitbook } from 'react-icons/si';

export default function Header() {
  return (
    <div className="relative z-10 flex flex-row items-center justify-between pb-10">
      <div className="flex flex-row items-center gap-4">
        <Link href="/" className="block border-r-2 border-[#004D70] pr-4">
          <Image src="/assets/images/footer-logo.png" alt="" width={94} height={83} />
          <p className="mt-2 text-sm font-semibold uppercase">GTA VENTURE</p>
        </Link>
        <div className="max-w-[254px] shrink-0 grow-0 text-gray">
          <p className="text-xs leading-5">
            If you have any questions, please email{' '}
            <Link href="mailto:GTAventure@123" className="text-main">
              GTAventure@123
            </Link>{' '}
            for more details
          </p>
        </div>
      </div>
      <div>
        <Link
          href="/"
          className="mx-3 inline-block h-7 w-7 rounded-md bg-main transition-all duration-200 hover:bg-white hover:text-main"
        >
          <BsTwitter className="mx-auto mt-1.5" />
        </Link>
        <Link
          href="/"
          className="mx-3 inline-block h-7 w-7 rounded-md bg-main transition-all duration-200 hover:bg-white hover:text-main"
        >
          <FaTelegramPlane className="mx-auto mt-1.5" />
        </Link>
        <Link
          href="/"
          className="mx-3 inline-block h-7 w-7 rounded-md bg-main transition-all duration-200 hover:bg-white hover:text-main"
        >
          <SiGitbook className="mx-auto mt-1.5" />
        </Link>
      </div>
    </div>
  );
}
