'use server';

import { cookies } from 'next/headers';

interface GetPostsOptions {
    endpoint: string;
    query?: {
        [key: string]: string | string[] | undefined;
    };
    withAuth?: boolean;
    cache?: RequestCache;
    tags?: string[];
}

export const getAllNews = async ({
    endpoint,
    query,
    withAuth = false,
    cache = 'no-cache',
    tags = ['posts'],
}: GetPostsOptions) => {
    try {
        const params = new URLSearchParams();

        // Search
        if (query?.searchTerm) {
            params.set('searchTerm', query.searchTerm as string);
        }

        // Category
        if (query?.category) {
            params.set('category', query.category as string);
        }

        // Sort
        if (query?.sortBy) {
            params.set('sortBy', query.sortBy as string);
        }

        // Pagination
        if (query?.page) {
            params.set('page', query.page as string);
        }

        if (query?.limit) {
            params.set('limit', query.limit as string);
        }

        const headers: HeadersInit = {};

        if (withAuth) {
            const cookieStore = await cookies();

            const accessToken = cookieStore.get('accessToken')?.value || null;

            if (!accessToken) {
                return {
                    success: false,
                    message: 'User not logged in.',
                    data: [],
                };
            }

            headers.Cookie = `accessToken=${accessToken}`;
        }

        const res = await fetch(
            `${process.env.BACKEND_API_URL}${endpoint}?${params.toString()}`,
            {
                headers,
                cache,
                next: {
                    revalidate: 60 * 60 * 6,
                    tags,
                },
            },
        );

        return await res.json();
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: 'Something went wrong.',
            data: [],
        };
    }
};
