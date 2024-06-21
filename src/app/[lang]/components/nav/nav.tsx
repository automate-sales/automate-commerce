import { UserObj } from "@/utils/auth";
import { LangSelector, NavElement, NavLinks, ProductsMenu, SearchInput, SideMenu, UserMenu } from "./client";
import { Brand, ShoppingCart } from "./server";
import prisma from '@/db'

type Props = {
    links: NavElement[];
    search?: boolean;
    user?: UserObj;
    languages?: string[];
    cartLength: number;
    lang?: string;
};

export default async function Nav({
    links,
    search,
    user,
    languages,
    lang='en'
}: Props) {
    const categories = await prisma.category.findMany({
        include: {
          subcategories: true,
        },
        orderBy: {
          priority: "asc",
        },
    });
    return (
        <nav className="h-16 bg-gray-50 z-40 fixed fixed-top w-full grid grid-cols-3 px-5">
            <SideMenu categories={categories} links={links} languages={languages}/>
            <Brand />
            <div className="hidden lg:flex justify-center items-center gap-2">
                {categories && <ProductsMenu lang={lang} categories={categories}/>}
                <NavLinks links={links} fixed/>
            </div>
            <div className="flex items-center justify-end gap-2">
                {search && <SearchInput classNames="hidden lg:flex" />}
                <UserMenu user={user}/>
                <ShoppingCart />
                {languages && <LangSelector fixed languages={languages} classNames="hidden lg:flex pl-4"/>}
            </div>

        </nav>
    );
}



  