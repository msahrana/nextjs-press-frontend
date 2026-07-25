'use client';

import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export function NewsSearchBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    // const updateQuery = (key: string, value: string) => {
    //     const params = new URLSearchParams(searchParams.toString());

    //     if (!value || value === 'all') {
    //         params.delete(key);
    //     } else {
    //         if (key === 'tags') {
    //             params.set(key, JSON.stringify([value]));
    //         } else {
    //             params.set(key, value);
    //         }
    //     }

    //     params.delete('page');

    //     router.replace(`${pathname}?${params.toString()}`);
    // };

    const updateQuery = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (!value || value === 'all') {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        params.delete('page');

        router.replace(`${pathname}?${params.toString()}`);
    };

    const handleSearch = (value: string) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            updateQuery('searchTerm', value);
        }, 500);
    };

    return (
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-end">
            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
                <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    className="pl-9"
                    placeholder="Search news..."
                    defaultValue={searchParams.get('searchTerm') ?? ''}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            {/* Tags */}
            <Select
                defaultValue={searchParams.get('tags') ?? 'all'}
                onValueChange={(value) => updateQuery('tags', value)}
            >
                <SelectTrigger className="w-full lg:w-45">
                    <SelectValue placeholder="Tags" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                </SelectContent>
            </Select>

            {/* Sort */}
            <Select
                defaultValue={searchParams.get('sortOrder') ?? 'desc'}
                onValueChange={(value) => updateQuery('sortOrder', value)}
            >
                <SelectTrigger className="w-full lg:w-45">
                    <SelectValue placeholder="Sort" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="desc">Newest First</SelectItem>
                    <SelectItem value="asc">Oldest First</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
