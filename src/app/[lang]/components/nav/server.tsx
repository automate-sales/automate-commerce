import { getIntl } from "@/utils/utils";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
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


export const ShoppingCart = ({ cartLength }: { cartLength: number }) => {
    return (
        <div>
            <Link className="relative" href="/cart">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 bg-opacity-90 rounded-full -top-2 -end-2 dark:border-gray-900">
                    {cartLength}
                </span>
            </Link>
        </div>
    )
}