'use client'

import { setCookie } from "@/app/actions";
import locales from "@/utils/locales";
import { getIntl } from "@/utils/utils";
import { Bars3Icon, ChevronDownIcon, ChevronRightIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { Category, Subcategory } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";


export const DropDown =({label, items, fixed=false, classNames=''}: {label: string | JSX.Element, items: Array<string|JSX.Element>, fixed?: boolean, classNames?: string})=> {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div className={`relative ${fixed && 'flex items-center'} ${classNames}`}>
        <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
          {label}
          <ChevronRightIcon
            className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          />
        </div>
        {/* make it fixed so it opens right below the button */}
        <ul
          className={`z-20 pt-2 transition-all duration-300 ${fixed && 'absolute left-0 top-full bg-gray-50 bg-opacity-90 shadow-lg'} ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          {items}
        </ul>
      </div>
    )
}


export type NavElement = {
    id: string;
    label: string;
    type: 'link' | 'dropdown';
    url?: string;
    options?: { id: string; label: string; url: string }[];
};

export const NavLinks = ({ links, fixed=false }: { links: NavElement[], fixed?: boolean }) => {
    return links.map((link, index) => {
        return (
            <div key={index}>
                {link.type === 'dropdown' &&  link.options? (
                    <DropDown label={link.label} fixed={fixed} items={link.options?.map((option, oi) => (
                        <div key={oi}>
                            <Link scroll={false} passHref href={option.url}>{option.label}</Link>
                        </div>
                    ) || [])} />
                ) : (
                    <Link scroll={false} passHref href={link.url || '#'}>
                        {link.label}
                    </Link>
                )}
            </div>
        );
    })
}


export const SideMenu = ({ categories, links, languages, lang='en' }: { categories: CategoryWithSubcategories[], links: NavElement[], languages?: string[], lang?: string }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [drawerPosition, setDrawerPosition] = useState("-100%");
    const drawerRef = useRef<HTMLDivElement>(null);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const openDrawer = () => {
        setIsMenuOpen(true);
        setDrawerPosition("0");
    };

    const closeDrawer = () => {
        setIsMenuOpen(false);
        setDrawerPosition("-100%");
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const touchDown = e.touches[0].clientX;
        setTouchStartX(touchDown);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX === null) {
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = touchStartX - currentTouch;

        if (diff > 50 && isMenuOpen) {
            closeDrawer();
        } else if (diff < -50 && !isMenuOpen) {
            openDrawer();
        }
    };

    const handleTouchEnd = () => {
        setTouchStartX(null);
    };

    return (
        <>
            <div className="lg:hidden flex items-center">
                <button onClick={openDrawer}>
                    {!isMenuOpen && <Bars3Icon className="h-6 w-6" />}
                </button>
            </div>
            <div
                ref={drawerRef}
                className={`fixed top-0 left-0 w-80 h-full bg-gray-50 bg-opacity-90 z-40 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
                style={{ transform: `translateX(${drawerPosition})` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="p-5 flex flex-col gap-3">
                    <XMarkIcon className="h-6 w-6 mb-4" onClick={closeDrawer} />
                    <SearchInput />
                    <ProductsMenu lang={lang} categories={categories} />
                    <NavLinks links={links} />
                    {languages && <LangSelector languages={languages} />}
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black opacity-20 z-20" onClick={closeDrawer}></div>
            )}
            <div
                className="fixed inset-y-0 left-0 w-5 z-50"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            ></div>
        </>
    );
};

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

export const UserMenu = ({ user }: { user: any }) => {
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



export const LangSelector = ({ languages, classNames='', fixed=false }: { languages: string[], classNames?: string, fixed?: boolean }) => {
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
        <DropDown classNames={classNames} fixed={fixed} label={currentLocale || 'en'} items={langs.map((l, index) => (
            <div
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                <button onClick={() => redirectLang(l)}>{l}</button>
            </div>
        ))} />
    );
};

export type CategoryWithSubcategories = Category & { subcategories: Subcategory[] };

export const ProductsMenu = ({lang, categories}:{lang: string, categories: CategoryWithSubcategories[]}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen); 
    return (
        <div>

            <button className="flex items-center lg:hidden" onClick={toggleDropdown}>
                <span>Products</span>
                <ChevronRightIcon
                    className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                />
            </button>
            <div className="hidden lg:flex items-center" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <Link passHref href="/products">Products</Link>
            </div>


            <div
                className={`transition-all duration-300 lg:bg-gray-50 ${isOpen ? 'max-h-screen opacity-100 bg-opacity-90' : 'max-h-0 opacity-0 overflow-hidden'} lg:origin-top lg:w-screen lg:left-0 lg:fixed lg:shadow-sm`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
            >
                <div className="hidden lg:grid lg:grid-cols-5 p-5" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                    {categories.map((cat: any, ci: number) => (
                        <DesktopCat key={`cat-${ci}`} cat={cat} lang={lang}/>
                    ))}
                </div>
                <div className="lg:hidden">
                    {categories.map((cat: any, ci: number) => (
                        <MobileCat key={`cat-${ci}`} cat={cat} lang={lang}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

const DesktopCat =({cat, lang}: {cat: CategoryWithSubcategories, lang: string})=> {
    return(
        <div className="hidden lg:block py-1">
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
    )
}

const MobileCat =({cat, lang}: {cat: CategoryWithSubcategories, lang: string})=> {
    return (
        <div className="lg:hidden">
            <DropDown 
                label={getIntl(cat.title, lang)} 
                items={cat.subcategories?.map((subcat: any, si: number) => (
                    <div key={`sub-${si}`}>
                        <Link scroll={false} passHref href={`/subcategories/${subcat.slug}`}>
                            {getIntl(subcat.title, lang)}
                        </Link>
                    </div>
                ) || [])}
            />
        </div>
    );
}
