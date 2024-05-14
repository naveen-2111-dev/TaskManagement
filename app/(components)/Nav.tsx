'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div>
        <div className=''>
          <Link href='/'>home</Link>
        </div>
        <div className=''>
          <Link href='/'>ticket</Link>
        </div>
      </div>
      <div>
        <p className='text-default-text'>naveen@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
