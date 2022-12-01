import usePopupStore from '@store/popup';
import React from 'react';

export default function ClostBtn() {
  const setOpen = usePopupStore((state) => state.setOpen);
  const setContent = usePopupStore((state) => state.setContent);

  const handleClosePopup = () => {
    setOpen(false);
    setContent(null);
  };
  return (
    <button className="btn-sm btn mt-5" onClick={handleClosePopup}>
      Close
    </button>
  );
}
