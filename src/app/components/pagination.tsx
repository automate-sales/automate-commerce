import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Pagination = ({
    count,
    pageSize,
    pageNumber,
    model
}: {
    count: number;
    pageSize: number;
    pageNumber: number;
    model: string;
}) => {
    return (
        <div className="grid md:grid-cols-2 gap-3 w-full pt-3">
            <div>
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{pageNumber * pageSize + 1}</span> to <span className="font-medium">{(pageNumber + 1) * pageSize < count ? (pageNumber + 1) * pageSize : count}</span> of <span className="font-medium">{count}</span> results
                </p>
            </div>

            <div className='md:text-right'>
                <nav className="isolate inline-flex gap-3" aria-label="Pagination">
                    <Link
                         aria-disabled={pageNumber === 0} 
                         tabIndex={pageNumber === 0 ? -1 : undefined}
                        href={`/${model}?page=${pageNumber - 1}`}
                        className={`relative inline-flex items-center px-2 py-2 text-gray-400 hover:text-blue-200 ${pageNumber === 0 ? 'pointer-events-none' : ''}`}
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                    {
                        Array.from({ length: Math.ceil(count / pageSize) }, (_, i) => (
                            <Link
                                aria-disabled={i === pageNumber} 
                                tabIndex={i === pageNumber? -1 : undefined}
                                key={i}
                                href={`/${model}?page=${i}`}
                                className={`relative inline-flex items-center px-4 text-sm font-semibold text-gray-900 rounded-full ${i === pageNumber ? 'bg-blue-200 text-white pointer-events-none' : 'hover:bg-gray-100'} `}
                            >
                                {i + 1}
                            </Link>
                        ))
                    }

                    <Link
                        aria-disabled={pageNumber === Math.ceil(count / pageSize) - 1}
                        tabIndex={pageNumber === Math.ceil(count / pageSize) - 1 ? -1 : undefined}
                        href={`/${model}?page=${pageNumber + 1}`}
                        className={`relative inline-flex items-center px-2 py-2 text-gray-400 hover:text-blue-200 ${pageNumber === Math.ceil(count / pageSize) - 1 ? 'pointer-events-none' : ''}`}
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>

                </nav>
            </div>
        </div>
    )
}

export default Pagination;