import Image from 'next/image';
import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { BsCheck } from 'react-icons/bs';
import usePopupStore from '@store/popup';

export default function HomeComponent() {
  const setOpen = usePopupStore((state) => state.setOpen);

  return (
    <div className="relative">
      <div className="main-background relative z-20 my-32 h-[691px] w-3/4 rounded-2xl">
        <div
          className="absolute top-0 left-0 z-0 h-full w-full rounded-2xl opacity-25"
          style={{
            backgroundImage: "url('/assets/images/bg-digital.jpg')",
            backgroundSize: '35% auto',
          }}
        />
        <Image
          src="/assets/images/vip-card.png"
          alt=""
          width={647}
          height={407}
          className="absolute top-1/2 left-1/2 z-10 -translate-y-1/2"
        />
        <div className="relative z-20">
          <h1 className="relative">
            <p className="main-text relative">
              GTA VIP PASS NFT
              <Image
                src="/assets/images/crown.png"
                width={33}
                height={20}
                alt=""
                className="absolute -top-4 left-[176px] z-20"
              />
            </p>
            <p className="text-shadow">GTA VIP PAS NFT</p>
          </h1>
          <p className="mt-10 max-w-[407px] text-[18px] text-[#95adbb]">
            To thank the brothers who have accompanied GTA during the past years, the GTA team has a
            special gift for the GTA Community community.
          </p>
          <span className="mt-6 block h-[5px] w-[114px] bg-[#0c455a]" />
          <p className="mt-10 font-semibold">Time to claim</p>
          <div className="clock">
            <FlipCountdown
              size="small"
              hideYear
              hideMonth
              titlePosition="bottom"
              yearTitle="Year"
              monthTitle="Months"
              dayTitle="Days"
              hourTitle="Hours"
              minuteTitle="Minutes"
              secondTitle="Seconds"
              endAt={'2022-12-12 01:26:58'} // Date/Time
            />
          </div>
          <p className="mt-10 text-sm">
            <span className="mr-2 inline-block h-[18px] w-[18px] rounded-full bg-main align-top text-white">
              <BsCheck className="mx-auto text-xl" />
            </span>
            Only whitelisted people can get this NFT
          </p>
          <p className="mt-5">
            <button className="btn w-full max-w-[290px] uppercase">Follow the tasks</button>
          </p>
          <p className="mt-4">
            <button
              className="btn-ghost btn w-full max-w-[290px] uppercase"
              onClick={() => setOpen(true)}
            >
              Claim
            </button>
          </p>
        </div>
      </div>
      <div className="absolute -top-16 left-1/2 z-0 h-[818px] w-1/2 rounded-2xl bg-main">
        <Image
          src="/assets/images/vertical-text.png"
          alt=""
          className="float-right mt-14"
          width={360}
          height={761}
        />
      </div>
    </div>
  );
}
