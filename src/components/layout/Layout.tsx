import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps)  {
  return (
    <div>
        <Header />
        <main className='mt-[4.65rem]'>
          {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout