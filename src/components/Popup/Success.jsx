import { BsCheck2Circle } from 'react-icons/bs';

export const Success = () => {
  return (
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
};
