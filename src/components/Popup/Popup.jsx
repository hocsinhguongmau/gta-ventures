import React from 'react';
import usePopupStore from '@store/popup';

export default function Popup() {
  const open = usePopupStore((state) => state.open);
  const content = usePopupStore((state) => state.content);
  return (
    <div className={`fixed top-0 left-0 z-[9999] h-full w-full ${open ? 'block' : 'hidden'}`}>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70" />
      <div className="absolute top-1/2 left-1/2 w-[352px] -translate-y-1/2 -translate-x-1/2 rounded-2xl bg-black py-10 text-center">
        {content}
      </div>
    </div>
  );
}
