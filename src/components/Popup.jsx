import Image from 'next/image';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import usePopupStore from '@store/popup';

const Waiting = () => (
  <>
    <div className="ispinner ispinner-large animating mx-auto scale-150">
      <div className="ispinner-blade"></div>
      <div className="ispinner-blade"></div>
      <div className="ispinner-blade"></div>
      <div className="ispinner-blade"></div>
      <div className="ispinner-blade"></div>
      <div className="ispinner-blade"></div>
      <div className="ispinner-blade"></div>
      <div className="ispinner-blade"></div>
    </div>
    <p className="mt-10 text-[16px] font-bold">Waiting For Confirmation</p>
    <p className="mt-3 text-xs text-gray">Confirm this transaction in your wallet</p>
  </>
);

const Success = () => (
  <>
    <p className="text-center">
      <span className="inline-block h-[55px] w-[55px] rounded-[40%] bg-main">
        <BsCheck2Circle className="mx-auto mt-2 text-[40px]" />
      </span>
    </p>
    <p className="mt-10 text-[16px] font-bold">Claim NFT successfully</p>
    <p className="mt-3 text-xs text-gray">Confirm this transaction in your wallet</p>
  </>
);

const Error = () => (
  <>
    <p>
      <Image
        src="/assets/images/not-in-whitelist.png"
        alt=""
        width={55}
        height={55}
        className="mx-auto"
      />
    </p>
    <p className="mt-10 text-[16px] font-bold">You are not in Whitelist</p>
    <p className="mt-3 text-xs text-gray">Please check again</p>
  </>
);

export default function Popup() {
  const open = usePopupStore((state) => state.open);
  const setOpen = usePopupStore((state) => state.setOpen);
  return (
    <div className={`fixed top-0 left-0 z-[9999] h-full w-full ${open ? 'block' : 'hidden'}`}>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70" />
      <div className="absolute top-1/2 left-1/2 w-[352px] -translate-y-1/2 -translate-x-1/2 rounded-2xl bg-black py-10 text-center">
        <Waiting />
        <Success />
        <Error />
        <button className="btn-sm btn mt-5" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
