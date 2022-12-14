import Image from 'next/image';
import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import usePopupStore from '@store/popup';
import { Waiting } from '@components/Popup/Waiting';
import { Error } from '@components/Popup/Error';
import { Success } from '@components/Popup/Success';
import { useClaimTicketMutation } from '../../hooks/mutations';
import useMetamask from '../../hooks/useMetamask';
import { COUNTDOWN_DATE, TASKS_URL } from '../../constants/index';
import Link from 'next/link';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import FlipCountdown from '@rumess/react-flip-countdown';
import { useCheckClaimPass, useCheckUserIsInWhitelist } from '../../hooks/query';
import { useQueryClient } from 'react-query';
import { QUERY_KEY } from '../../constants/index';

dayjs.extend(utc);

export default function HomeComponent() {
  const queryClient = useQueryClient();
  const setOpen = usePopupStore((state) => state.setOpen);
  const { connect, web3Instance, isActive } = useMetamask();
  const claimTicketMutation = useClaimTicketMutation();

  const setContent = usePopupStore((state) => state.setContent);
  const [isClaimTimeUp, setIsClaimTimeUp] = useState(false);
  const { data: isClaimPass } = useCheckClaimPass(web3Instance);
  const { data: isWhitelisted } = useCheckUserIsInWhitelist(web3Instance);

  const handleClaim = async () => {
    if (!isWhitelisted) {
      setOpen(true);
      setContent(<Error title={'You are not in Whitelist'} errorText={'Please check again'} />);
      return;
    }

    if (!isClaimTimeUp) {
      setOpen(true);
      setContent(
        <Error title={'Claim time is not reached'} errorText={'Cannot claim at this time'} />
      );
      return;
    }
    try {
      setOpen(true);
      setContent(<Waiting />);
      const receipt = await claimTicketMutation.mutateAsync({
        web3: web3Instance,
      });

      if (receipt) {
        queryClient.invalidateQueries([QUERY_KEY.CHECK_CLAIM_PASS]);
        setOpen(true);
        setContent(<Success />);
      } else {
        setOpen(true);
        setContent(<Error title={'Error'} errorText={'Unexpected error'} />);
      }
    } catch (error) {
      setOpen(true);
      setContent(<Error title={'Something wrong'} errorText={error} />);
    }
  };

  return (
    <div className="relative">
      <div className="main-background relative z-20 my-8 h-[691px] w-full rounded-2xl md:my-16 lg:my-32 lg:w-3/4">
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
          className="absolute top-1/2 left-1/2 z-10 hidden -translate-y-1/2 lg:block"
        />
        <div className="relative z-20">
          <h1 className="relative">
            <p className="main-text relative ">
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
              endAtZero
              onTimeUp={() => setIsClaimTimeUp(true)}
              endAt={COUNTDOWN_DATE} // Date/Time
            />
          </div>

          <p className="mt-10 text-sm">
            <span className="mr-2 inline-block h-[18px] w-[18px] rounded-full bg-main align-top text-white">
              <BsCheck className="mx-auto text-xl" />
            </span>
            Only whitelisted people can get this NFT
          </p>
          <p className="mt-5">
            <Link className="btn w-full max-w-[290px] uppercase" href={TASKS_URL} target="_blank">
              Follow the tasks
            </Link>
          </p>
          <p className="mt-4">
            {isActive ? (
              <>
                {!isClaimPass ? (
                  <button
                    className="btn-ghost btn w-full max-w-[290px] uppercase"
                    onClick={handleClaim}
                    disabled={!isClaimTimeUp}
                  >
                    Claim
                  </button>
                ) : (
                  <span className="pt-5">Congratulation, you have already owned GTA Pass</span>
                )}
              </>
            ) : (
              <button className="btn-ghost btn w-full max-w-[290px] uppercase" onClick={connect}>
                Connect to wallet
              </button>
            )}
          </p>
        </div>
      </div>
      <div className="absolute -top-16 left-1/2 z-0 hidden h-[818px] w-1/2 rounded-2xl bg-main lg:block">
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
