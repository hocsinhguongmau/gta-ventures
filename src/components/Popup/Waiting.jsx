export const Waiting = () => {
  return (
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
};
