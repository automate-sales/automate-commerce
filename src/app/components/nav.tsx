'use client'

import React, { useState, useRef } from 'react';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

type NavItem = {
    label: string;
    type: 'link' | 'dropdown' | 'fulldropdown';
    data: any;
}

const navItems = [
    {label: 'Products', type: 'fulldropdown', data: [
        {label: 'Product 1', type: 'link', data: '/product1'},
        {label: 'Product 2', type: 'link', data: '/product2'},
        {label: 'Product 3', type: 'link', data: '/product3'},
        {label: 'Product 4', type: 'link', data: '/product4'},
        {label: 'Product 5', type: 'link', data: '/product5'},
        {label: 'Product 6', type: 'link', data: '/product6'}
    ]},
    {label: 'Blog', type: 'link', data: '/blog'},
    {label: 'Soporte', type: 'dropdown', data: [
        {label: 'item 1', type: 'link', data: '/item1'},
        {label: 'item 2', type: 'link', data: '/item2'},
        {label: 'item 3', type: 'link', data: '/item3'},
    ]},
] as NavItem[];

const DropdownMenu = ({ children, data }: {children : JSX.Element | string, data: NavItem[]}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility
  
    return (
      <div className="relative inline-block text-left z-20 h-full">
        <button onClick={toggleDropdown} className="flex items-center h-full">
          {children}
        </button>
        <div
          className={`origin-top-right absolute right-0 w-48 shadow-sm bg-white ${isOpen ? 'block' : 'hidden'}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {data.map((item, index) => <div key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{NavElement({item, index})}</div>)}
         
          {/* More dropdown items */}
        </div>
      </div>
    );
  };

  const FullDropdownMenu = ({ children, data }: {children : JSX.Element | string, data: NavItem[]}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility
  
    return (
      <div className="relative inline-block text-left z-20">
        <button onClick={toggleDropdown} className="flex items-center">
          {children}
        </button>
        <div
          className={`origin-top w-screen left-0 fixed shadow-sm bg-white ${isOpen ? 'block' : 'hidden'}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
            <div className="grid grid-cols-3">
                {data.map((item, index) => <div key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><NavElement item={item}/></div>)}
            </div>
         
          {/* More dropdown items */}
        </div>
      </div>
    );
  };

  const NavElement = ({ item, index=1 }: {item: NavItem, index?:number}) => {
    switch (item.type) {
      case 'link':
        return <Link href={item.data}>
            <span className={`py-5 px-3 ${index === 0 ? 'font-bold' : ''} hover:text-gray-900`}>{item.label}</span>
        </Link>;
        case 'dropdown':
            return <DropdownMenu data={item.data}>
                <span className={`py-5 px-3 ${index === 0 ? 'font-bold' : ''} hover:text-gray-900`}>{item.label}</span>
            </DropdownMenu>;
        case 'fulldropdown':
            return <FullDropdownMenu data={item.data}>
                <span className={`py-5 px-3 ${index === 0 ? 'font-bold' : ''} hover:text-gray-900`}>{item.label}</span>
            </FullDropdownMenu>;
        default:
            return <></>;
    }
}

const UserMenu = ({ children, user }: { children: JSX.Element| string, user:any }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const urlPath = usePathname();

    const logOut = async () => {
        await signOut();
        console.log('User signed out');
        router.push(urlPath);
    }

    return (
        <div className="relative inline-block text-left z-20 h-full">
            <button onClick={toggleDropdown} className="flex items-center h-full">
                {children}
            </button>
            {isOpen && (
                <div
                    className={`origin-top-right absolute right-0 w-48 shadow-sm bg-white ${isOpen ? 'block' : 'hidden'}`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    {user ? (
                        <ul>
                            <li className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>{user.email}</li>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link scroll={false} passHref href="/orders">Mis ordenes</Link></li>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <button id='signOutBtn' onClick={() => logOut()}
                                    className="py-1 px-3 bg-gray-300 text-white">Cerrar sesión</button>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Link scroll={false} passHref href={`/login?redirect=${urlPath}`}>Iniciar sesión</Link></li>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <div className="py-1 px-3 bg-gray-300 text-white">
                                    <Link scroll={false} passHref href={`/login?redirect=${urlPath}`}>Crear cuenta</Link>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

const Navbar = ({user}: {user:any}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume user is not logged in by default
  const drawerRef = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('-100%'); // Drawer is hidden initially

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const openDrawer = () => {
    setIsMenuOpen(true);
    setDrawerPosition('0'); // Open drawer
  };

  const closeDrawer = () => {
    setIsMenuOpen(false);
    setDrawerPosition('-100%'); // Close drawer
  };

  // Handle dragging for the side drawer
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    drawerRef.current.touchStartX = touchDown;
  };

  const handleTouchMove = (e) => {
    const touchDown = drawerRef.current.touchStartX;
    if(touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 50) { // Threshold to decide if swipe is enough to close drawer
      closeDrawer();
    }
  };

  const handleTouchEnd = () => {
    if (drawerRef.current) {
        drawerRef.current.touchStartX = null;
    }
  };

  return (
    <>
      <nav className="bg-white shadow z-60">
        
        
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">

            <div className="md:hidden flex items-center">
                <button onClick={() => openDrawer()}>
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
            </div>

          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 font-bold">
                Brand
              </Link>
            </div>
            
          </div>

          {/* Middle navigation: only shown on medium screens and up */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
                <NavElement key={index} item={item} index={index}/>
            ))}
          </div>

          {/* Icons on the right */}
          <div className="flex items-center space-x-4">
            <UserMenu user={user}>
                <UserIcon className="h-6 w-6" />
            </UserMenu>
            <Link href='/cart'><ShoppingBagIcon className="h-6 w-6" /></Link>
          </div>
        </div>
      </div>

    </nav>

      {/* Side drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 w-80 h-full bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
        style={{ left: drawerPosition }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="p-5">
          <XMarkIcon className="h-6 w-6 mb-4" onClick={closeDrawer} />
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a href="#" key={index} className={`py-5 px-3 ${index === 0 ? 'font-bold' : ''} hover:text-gray-900`}>{item.label}</a>
            ))}
          </div>
        </div>


      </div>

      {/* Overlay for mobile view when drawer is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeDrawer}></div>
      )}
    </>
  );
};

export default Navbar;
