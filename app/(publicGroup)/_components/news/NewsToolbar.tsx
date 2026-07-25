'use client';

import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

interface NewsToolbarProps {
    categories: string[];
}

export function NewsToolbar({ categories }: NewsToolbarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            updateQuery('searchTerm', value);
        }, 500);
    };

    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    className="pl-9"
                    placeholder="Search news..."
                    defaultValue={searchParams.get('searchTerm') ?? ''}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <Select
                defaultValue={searchParams.get('category') ?? 'all'}
                onValueChange={(value) => updateQuery('category', value)}
            >
                <SelectTrigger className="w-45">
                    <SelectValue placeholder="Category" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>

                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select
                defaultValue={searchParams.get('sortBy') ?? 'latest'}
                onValueChange={(value) => updateQuery('sortBy', value)}
            >
                <SelectTrigger className="w-45">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>

                    <SelectItem value="oldest">Oldest</SelectItem>

                    <SelectItem value="views">Most Viewed</SelectItem>

                    <SelectItem value="title">Title A-Z</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
