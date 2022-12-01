import Image from 'next/image';

export const Error = () => {
  return (
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
};
