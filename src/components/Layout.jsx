import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Popup from './Popup/Popup';
import usePopupStore from '@store/popup';

export default function Layout({ children }) {
  const open = usePopupStore((state) => state.open);
  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-[#020d14] ${
        open ? 'h-screen overflow-hidden' : ''
      }`}
    >
      <Image
        src="/assets/images/bg-top.png"
        height={363}
        width={363}
        className="absolute top-0 left-0 z-0 opacity-20"
        alt=""
      />{' '}
      <Image
        src="/assets/images/bg-bot.png"
        height={363}
        width={363}
        className="absolute right-0 bottom-0 z-0 opacity-10"
        alt=""
      />
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col justify-between">
        <Header />
        <div className="h-full pb-20">{children}</div>
        <Footer />
      </div>
      <Popup />
    </div>
  );
}
