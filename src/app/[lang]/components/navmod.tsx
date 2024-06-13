'use client'

import { setCookie } from "@/app/actions";
import { CartWithItems } from "@/types";
import locales from "@/utils/locales";
import { Bars3Icon, ChevronDownIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { Cart, Category, Product, Subcategory } from "@prisma/client";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";

type Link = {
    id: string;
    label: string;
    type: 'link' | 'dropdown';
    url?: string;
    options?: { id: string; label: string; url: string }[];
};

type CategoriesWithSubcategories = Array<Category & { subcategories: Subcategory[] }>;

type Props = {
    categories?: CategoriesWithSubcategories;
    links: Link[];
    search?: boolean;
    user?: User;
    languages?: string[];
    cartLength: number;
};

export default function Nav({
    categories,
    links,
    search,
    user,
    languages,
    cartLength
}: Props) {
    return (
        <nav className="bg-gray-50 z-20 fixed fixed-top w-full grid grid-cols-3">
            <Hamburger />
            <Brand />
            <div className="hidden lg:flex justify-center items-center gap-2">
                {categories && <ProductsMenu />}
                <NavLinks links={links} />
            </div>
            <div className="flex items-center justify-end gap-2">
                {search && <SearchInput classNames="hidden lg:flex" />}
                <UserMenu user={user}/>
                <ShoppingCart cartLength={cartLength}/>
                {languages && <LangSelector languages={languages}/>}
            </div>

        </nav>
    );
}

const Hamburger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const drawerRef = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("-100%");
    const openDrawer = () => {
        setIsMenuOpen(true);
        setDrawerPosition("0");
    };
    const closeDrawer = () => {
        setIsMenuOpen(false);
        setDrawerPosition("-100%");
    };
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
    return(
    <>
    <div className="md:hidden flex items-center">
        <button onClick={() => openDrawer()}>
        {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
    </div> 
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
          {/* <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                href="#"
                key={index}
                className={`px-3 ${index === 0 ? "font-bold" : ""} hover:text-gray-900`}
              >
                {item.label}
              </a>
            ))}
          </div> */}
        </div>
      </div>

      {/* Overlay for mobile view when drawer is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-20 z-40" onClick={closeDrawer}></div>
      )}
    </>
    )
}

const Brand =()=> {
    return(
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
    )
}

export const SearchInput = ({
    classNames
}: {
    classNames?: string;
}) => {
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
        className={`flex items-center px-1 lg:px-2 lg:border-b-2 lg:border-blue-200 ${classNames}`}
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

const UserMenu = ({ user }: { user: any }) => {
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
      <div className="">
        <button onClick={toggleDropdown} className="flex items-center h-full">
            <UserIcon className="h-6 w-6" />
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

  const ShoppingCart = ({cartLength}:{cartLength: number}) => {
    return(
            <div>
                    <Link className="relative" href="/cart">
                <ShoppingBagIcon className="h-6 w-6" />
                <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -end-3 dark:border-gray-900">
                    {cartLength}
                </span>
            </Link>
        </div>
    )
}

  const LangSelector = ({languages}: {languages: string[]}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const pathName = usePathname();
    const currentLocale = languages.includes(pathName.split("/")[1]) ? pathName.split("/")[1] : null;
    const currentPath = currentLocale ? pathName.replace(`/${currentLocale}`, "") : pathName;
    const locale = currentLocale ? currentLocale : "en";
    const reorderedLangs = (target: string, arr: Array<string>) => [target].concat(arr.filter(item => item !== target));
    const langs = reorderedLangs(locale, locales);
    const redirectLang = (lang: string) => {
      const newUrl = `/${lang}${currentPath}`;
      setCookie("locale", lang).then(() => {
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

  const ProductsMenu =()=> {
    return(
        <button className="flex items-center">
            <span>Products</span>
            <ChevronDownIcon className="h-4 w-4 lg:hidden" />
        </button>    
    )
  }

  const NavLinks = ({links}: {links: Link[]}) => {
    return links.map( (link, index) => 
        <Link key={index} href={link.options && link.options[0].url || link.url}>{link.label}</Link>   
    )
  }