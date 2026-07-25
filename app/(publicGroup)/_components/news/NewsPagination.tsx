'use client';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useSearchParams } from 'next/navigation';

interface NewsPaginationProps {
    currentPage: number;
    totalPages: number;
}

export function NewsPagination({
    currentPage,
    totalPages,
}: NewsPaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (page?: number) => {
        if (!page) return pathname;

        const params = new URLSearchParams(searchParams?.toString() ?? '');
        params.set('page', String(page));

        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    const getPages = () => {
        const pages: (number | 'ellipsis')[] = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            return pages;
        }

        // Always show first page
        pages.push(1);

        // When current page is near beginning
        if (currentPage <= 3) {
            pages.push(2);
            pages.push(3);
            pages.push(4);
            pages.push('ellipsis');
        }

        // Middle pages
        else if (currentPage > 3 && currentPage < totalPages - 2) {
            pages.push('ellipsis');

            pages.push(currentPage - 1);
            pages.push(currentPage);
            pages.push(currentPage + 1);

            pages.push('ellipsis');
        }

        // Near last pages
        else {
            pages.push('ellipsis');

            pages.push(totalPages - 3);
            pages.push(totalPages - 2);
            pages.push(totalPages - 1);
        }

        // Always show last page
        pages.push(totalPages);

        return pages;
    };

    const pages = getPages();

    return (
        <Pagination className="mt-8">
            <PaginationContent>
                {/* Previous */}
                <PaginationItem>
                    {currentPage <= 1 ? (
                        <PaginationPrevious
                            href="#"
                            aria-disabled="true"
                            className="pointer-events-none opacity-50"
                        />
                    ) : (
                        <PaginationPrevious
                            href={createPageURL(currentPage - 1)}
                        />
                    )}
                </PaginationItem>

                {/* Page Numbers */}
                {pages.map((page, index) =>
                    page === 'ellipsis' ? (
                        <PaginationItem key={`ellipsis-${index}`}>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={`${page}-${index}`}>
                            <PaginationLink
                                href={createPageURL(page)}
                                isActive={page === currentPage}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ),
                )}

                {/* Next */}
                <PaginationItem>
                    {currentPage >= totalPages ? (
                        <PaginationNext
                            href="#"
                            aria-disabled="true"
                            className="pointer-events-none opacity-50"
                        />
                    ) : (
                        <PaginationNext href={createPageURL(currentPage + 1)} />
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
