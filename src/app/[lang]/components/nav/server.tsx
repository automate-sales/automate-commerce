import { getCartLength } from "@/utils/leads/server";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Brand = () => {
    return (
        <div className="flex items-center justify-center lg:justify-start">
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
                                zIndex: 20,
                            }}
                        ></div>
                        <h3 className="text-xl uppercase font-medium tracking-wide link">Ergonomica</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export const ShoppingCart = async () => {
    const cartLength = await getCartLength();
    return (
        <div className="relative flex items-center">
            <Link id="cartBtn" href="/cart" className="relative inline-block">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 bg-opacity-90 rounded-full -top-2 -right-2 dark:border-gray-900 border border-transparent">
                    {cartLength}
                </span>
            </Link>
        </div>
    );
};