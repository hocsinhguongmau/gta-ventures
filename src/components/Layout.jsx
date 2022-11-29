import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Popup from './Popup';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#020d14]">
      <Image
        src="/assets/images/bg-top.png"
        height={363}
        width={363}
        className="absolute top-0 left-0 z-0 opacity-20"
      />{' '}
      <Image
        src="/assets/images/bg-bot.png"
        height={363}
        width={363}
        className="absolute right-0 bottom-0 z-0 opacity-10"
      />
      <div className="container relative z-10 mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
      <Popup />
    </div>
  );
}
