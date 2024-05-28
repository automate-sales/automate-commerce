"use client";

import React, { useState, useRef } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import locales from "@/utils/locales";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { getIntl } from "@/utils/utils";
import { createCookie } from "@/app/actions";

type NavItem = {
  label: string;
  type: "link" | "dropdown" | "fulldropdown";
  data: any;
};

const Navbar = ({
  user,
  categories,
  cartItemsCount,
  dict,
  lang
}: {
  user: any;
  categories: any;
  cartItemsCount: number;
  dict: any;
  lang: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const drawerRef = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("-100%"); // Drawer is hidden initially

  const pathName = usePathname();
  const currentLocale = locales.includes(pathName.split("/")[1]) ? pathName.split("/")[1] : null;
  const currentPath = currentLocale ? pathName.replace(`/${currentLocale}`, "") : pathName;
  const locale = currentLocale ? currentLocale : "en";
  const reorderedLangs = (target: string, arr: Array<string>) => [target].concat(arr.filter(item => item !== target));
  
  const navItems = [
    {
      label: dict.nav.products,
      type: "fulldropdown",
      data: []
    },
    { label: dict.nav.blog, type: "link", data: "/blog" },
    {
      label: dict.nav.support,
      type: "dropdown",
      data: [
        { label: "item 1", type: "link", data: "/item1" },
        { label: "item 2", type: "link", data: "/item2" },
        { label: "item 3", type: "link", data: "/item3" },
      ],
    },
  ] as NavItem[];

  /* const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  }; */

  const openDrawer = () => {
    setIsMenuOpen(true);
    setDrawerPosition("0"); // Open drawer
  };

  const closeDrawer = () => {
    setIsMenuOpen(false);
    setDrawerPosition("-100%"); // Close drawer
  };

  // Handle dragging for the side drawer
  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    if (drawerRef.current) (drawerRef.current as any).touchStartX = touchDown;
  };

  const handleTouchMove = (e: any) => {
    const touchDown = (drawerRef.current as any).touchStartX;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 50) {
      // Threshold to decide if swipe is enough to close drawer
      closeDrawer();
    }
  };

  const handleTouchEnd = () => {
    if (drawerRef.current) {
      (drawerRef.current as any).touchStartX = null;
    }
  };

  const langs = reorderedLangs(locale, locales);
  
  const LangSelector = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    
    const redirectLang = (lang: string) => {
      const newUrl = `/${lang}${currentPath}`;
      createCookie("locale", lang).then(() => {
        router.push(newUrl);
      });
    };

    return (
      <div className="relative inline-block text-left z-20 h-full">
        <button onClick={toggleDropdown} className="flex items-center h-full">
          <div className={`flex items-center py-5 px-3 hover:text-gray-900`}>
            <span className="pr-1">{currentLocale}</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </button>
        <div
          className={`origin-top-right absolute shadow-sm bg-gray-50 ${isOpen ? "block" : "hidden"
            }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {langs.map((l, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <button onClick={() => redirectLang(l)}>{l}</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-gray-50 z-20 fixed fixed-top w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="md:hidden flex items-center">
              <button onClick={() => openDrawer()}>
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <Link scroll={false} passHref href="/">
                  <div className="py-1 flex items-end relative">
                    <div
                      style={{
                        position: "absolute",
                        top: ".1em",
                        border: ".15rem solid rgb(147 197 253)",
                        borderRadius: "50%",
                        width: ".45rem",
                        height: ".45rem",
                        zIndex: 80,
                      }}
                    ></div>
                    <h3 className="text-xl uppercase font-medium tracking-wide link">Ergonomica</h3>
                  </div>
                </Link>
              </div>
            </div>

            {/* Middle navigation: only shown on medium screens and up */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <NavElement key={index} item={item} index={index} categories={categories} lang={lang} />
              ))}
            </div>

            {/* Icons on the right */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex">
                <SearchInput />
              </div>
              <UserMenu user={user}>
                <UserIcon className="h-6 w-6" />
              </UserMenu>
              <Link className="relative" href="/cart">
                <ShoppingBagIcon className="h-6 w-6" />
                <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -end-3 dark:border-gray-900">
                  {cartItemsCount}
                </span>
              </Link>
              
              <LangSelector />
              
            </div>
          </div>
        </div>
      </nav>

      {/* Side drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 w-80 h-full bg-gray-50 z-20 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        style={{ left: drawerPosition }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="p-5">
          <XMarkIcon className="h-6 w-6 mb-4" onClick={closeDrawer} />
          <div className="py-4">
            <SearchInput />
          </div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                href="#"
                key={index}
                className={`px-3 ${index === 0 ? "font-bold" : ""} hover:text-gray-900`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile view when drawer is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-20 z-40" onClick={closeDrawer}></div>
      )}
    </>
  );
};

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const searchProducts = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const urlQuery = query.replace(" ", "%20");
    //searchEvent(urlQuery, leadId)
    router.push(`/products?query=${urlQuery}`);
  };

  return (
    <form
      className="flex items-center px-1 lg:px-2 lg:border-b-2 lg:border-blue-200"
      onSubmit={(ev) => searchProducts(ev)}
    >
      <MagnifyingGlassIcon className="h-6 w-6 lg:hidden" />
      <input
        id="search"
        type="text"
        className="w-36 p-1 bg-transparent text-gray-700 focus:outline-none"
        required
        minLength={2}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
      />
      <button
        type="submit"
        className="focus:outline-none items-center justify-center hidden lg:flex"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </button>
    </form>
  );
};





const DropdownMenu = ({ children, data, lang }: { children: JSX.Element | string; data: NavItem[], lang:string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility

  return (
    <div className="relative inline-block text-left z-20 h-full">
      <button onClick={toggleDropdown} className="flex items-center h-full">
        {children}
      </button>
      <div
        className={`origin-top-right absolute right-0 w-48 shadow-sm bg-gray-50 ${isOpen ? "block" : "hidden"
          }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {NavElement({ item, index, lang })}
          </div>
        ))}
      </div>
    </div>
  );
};

const FullDropdownMenu = ({ children, data, lang }: { children: JSX.Element | string; data: any, lang: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility
  return (
    <div className="relative inline-block text-left z-20">
      <button onClick={toggleDropdown} className="flex items-center">
        {children}
      </button>
      <div
        className={`origin-top w-screen left-0 fixed p-5 shadow-sm bg-gray-50 bg-opacity-90 ${isOpen ? "block" : "hidden"
          }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="grid grid-cols-5">
          {data.map((cat: any, ci: number) => (
            <div className="py-1" key={`cat-${ci}`}>
              <div className="text-md font-bold link">
                <Link scroll={false} passHref href={`/categories/${cat.slug}`}>
                  {getIntl(cat.title, lang)}
                </Link>
              </div>
              <ul className="pt-2">
                {cat.subcategories?.map((subcat: any, si: number) => {
                  if (subcat)
                    return (
                      <div key={`sub-${si}`}>
                        <li className="link pb-1 text-sm">
                          <Link scroll={false} passHref href={`/subcategories/${subcat.slug}`}>
                            {getIntl(subcat.title, lang)}
                          </Link>
                        </li>
                      </div>
                    );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* More dropdown items */}
      </div>
    </div>
  );
};

const NavElement = ({
  item,
  index = 1,
  categories,
  lang
}: {
  item: NavItem;
  index?: number;
  categories?: any;
  lang: string
}) => {
  switch (item.type) {
    case "link":
      return (
        <Link href={item.data}>
          <span className={`py-5 px-3 ${index === 0 ? "font-bold" : ""} hover:text-gray-900`}>
            {item.label}
          </span>
        </Link>
      );
    case "dropdown":
      return (
        <DropdownMenu data={item.data} lang={lang}>
          <span className={`py-5 px-3 ${index === 0 ? "font-bold" : ""} hover:text-gray-900`}>
            {item.label}
          </span>
        </DropdownMenu>
      );
    case "fulldropdown":
      return (
        <FullDropdownMenu data={categories} lang={lang}>
          <span className={`py-5 px-3 ${index === 0 ? "font-bold" : ""} hover:text-gray-900`}>
            {item.label}
          </span>
        </FullDropdownMenu>
      );
    default:
      return <></>;
  }
};

const UserMenu = ({ children, user }: { children: JSX.Element | string; user: any }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const urlPath = usePathname();

  const logOut = async () => {
    await signOut();
    console.log("User signed out");
    router.push(urlPath);
  };

  return (
    <div className="relative inline-block text-left z-20 h-full">
      <button onClick={toggleDropdown} className="flex items-center h-full">
        {children}
      </button>
      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 w-48 shadow-sm bg-white ${isOpen ? "block" : "hidden"
            }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {user ? (
            <ul>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {user.email}
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Link scroll={false} passHref href="/orders">
                  Mis ordenes
                </Link>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <button
                  id="signOutBtn"
                  onClick={() => logOut()}
                  className="py-1 px-3 bg-gray-300 text-white"
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Link scroll={false} passHref href={`/login?redirect=${urlPath}`}>
                  Iniciar sesión
                </Link>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <div className="py-1 px-3 bg-gray-300 text-white">
                  <Link scroll={false} passHref href={`/login?redirect=${urlPath}`}>
                    Crear cuenta
                  </Link>
                </div>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
