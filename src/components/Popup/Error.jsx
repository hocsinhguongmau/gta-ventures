import Image from 'next/image';
import CloseBtn from './CloseBtn';

export const Error = ({ title, errorText }) => {
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
      <p className="mt-10 text-[16px] font-bold">{title}</p>
      <p className="mt-3 text-xs text-gray">{errorText}</p>
      <CloseBtn />
    </>
  );
};
