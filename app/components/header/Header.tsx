import React, { ReactNode } from 'react';
import logo from "../../features/images/Logonetflix.png";
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children?: ReactNode;
}

const Header: React.FC<LayoutProps> = () => {
  return (
    <header className='bg-black h-16 z-10'>
      <nav>
        <Link href={`/`}>
          <Image className='w-28 h-10 p-15' src={logo} alt="Netflix Logo" />
        </Link>
      </nav>
      <div className="register flex mr-10 items-center">
        <h5 className='text-white p-2 text-xs'>UNLIMITED TV SHOWS & MOVIES</h5>
        <button className='text-white border-white py-2 text-sm join px-5'>JOIN NOW</button>
        <button className='text-white border-white py-2 text-sm  sign ml-3 px-3'>SIGN IN</button>
      </div>
    </header>
  );
};

export default Header;

