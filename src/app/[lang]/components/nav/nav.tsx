import { UserObj } from "@/utils/auth";
import { CategoryWithSubcategories, LangSelector, NavElement, NavLinks, ProductsMenu, SearchInput, SideMenu, UserMenu } from "./client";
import { Brand, ShoppingCart } from "./server";
import { cookies } from "next/headers";

type Props = {
    categories: CategoryWithSubcategories[];
    links: NavElement[];
    search?: boolean;
    user?: UserObj;
    languages?: string[];
    cartLength: number;
    lang?: string;
};

export default function Nav({
    categories,
    links,
    search,
    user,
    languages,
    cartLength,
    lang='en'
}: Props) {
    const cookieStore = cookies()
    const leadId = cookieStore.get('ergo_lead_id')?.value || '';
    return (
        <nav className="h-16 bg-gray-50 z-40 fixed fixed-top w-full grid grid-cols-3 px-5">
            <SideMenu categories={categories} links={links} languages={languages}/>
            <Brand />
            <div className="hidden lg:flex justify-center items-center gap-2">
                {categories && <ProductsMenu lang={lang} categories={categories}/>}
                <NavLinks links={links} fixed/>
            </div>
            <div className="flex items-center justify-end gap-2">
                {search && <SearchInput leadId={leadId} classNames="hidden lg:flex" />}
                <UserMenu user={user}/>
                <ShoppingCart cartLength={cartLength}/>
                {languages && <LangSelector fixed languages={languages} classNames="hidden lg:flex pl-4"/>}
            </div>

        </nav>
    );
}



  