import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

// Define the component props type
type PaginationProps = {
    count: number;
    pageSize: number;
    pageNumber: number;
    model: string;
    query?: string | undefined | null;
};

const Pagination = ({
    count,
    pageSize,
    pageNumber,
    model,
    query
}: PaginationProps) => {
    const totalPages = Math.ceil(count / pageSize);
    const queryParam = query ? `&query=${query}` : '';

    // Define the function return type explicitly
    const createPageLink = (index: number, isCurrent: boolean): JSX.Element => (
        <Link
            aria-disabled={isCurrent}
            tabIndex={isCurrent ? -1 : undefined}
            key={index}
            href={`/${model}?page=${index}${queryParam}`}
            className={`relative inline-flex items-center justify-center font-semibold text-gray-900 rounded-full ${isCurrent ? 'bg-blue-200 text-white pointer-events-none' : 'hover:bg-gray-100'} ${isCurrent ? 'w-8 h-8' : ''}`}
            style={isCurrent ? { borderRadius: '50%' } : undefined}
            scroll={false}
            shallow={true}
        >
            {index + 1}
        </Link>
    );
    // Function to decide which pagination links to display
    const getPageItems = (): JSX.Element[] => {
        const items: JSX.Element[] = [];
        if (totalPages <= 6) {
            for (let i = 0; i < totalPages; i++) {
                items.push(createPageLink(i, i === pageNumber));
            }
        } else {
            if (pageNumber >= 2 && pageNumber < totalPages - 3) {
                items.push(createPageLink(0, false));
                items.push(<span key="ellipsis1" className="text-gray-500">...</span>);
                for (let i = pageNumber - 1; i <= pageNumber + 1; i++) {
                    items.push(createPageLink(i, i === pageNumber));
                }
                items.push(<span key="ellipsis2" className="text-gray-500">...</span>);
                items.push(createPageLink(totalPages - 1, false));
            } else {
                for (let i = 0; i < 3; i++) {
                    items.push(createPageLink(i, i === pageNumber));
                }
                items.push(<span key="ellipsis1" className="text-gray-500">...</span>);
                for (let i = totalPages - 3; i < totalPages; i++) {
                    items.push(createPageLink(i, i === pageNumber));
                }
            }
        }
        return items;
    };

    return (
        <div className="grid md:grid-cols-2 gap-3 w-full pt-3">
            <div>
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{pageNumber * pageSize + 1}</span> to <span className="font-medium">{Math.min((pageNumber + 1) * pageSize, count)}</span> of <span className="font-medium">{count}</span> results
                </p>
            </div>
            <div className='md:text-right'>
                <nav id='pagination' className="isolate inline-flex gap-4" aria-label="Pagination">
                    <Link
                        id='paginationPrevious'
                        aria-disabled={pageNumber === 0}
                        tabIndex={pageNumber === 0 ? -1 : undefined}
                        href={`/${model}?page=${pageNumber - 1}${queryParam}`}
                        className={`relative inline-flex items-center text-gray-400 hover:text-blue-200 ${pageNumber === 0 ? 'pointer-events-none' : ''}`}
                        scroll={false}
                        shallow={true}
                    >
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </Link>
                    {getPageItems()}
                    <Link
                        id='paginationNext'
                        aria-disabled={pageNumber === totalPages - 1}
                        tabIndex={pageNumber === totalPages - 1 ? -1 : undefined}
                        href={`/${model}?page=${pageNumber + 1}${queryParam}`}
                        className={`relative inline-flex items-center text-gray-400 hover:text-blue-200 ${pageNumber === totalPages - 1 ? 'pointer-events-none' : ''}`}
                        scroll={false}
                        shallow={true}
                    >
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;
