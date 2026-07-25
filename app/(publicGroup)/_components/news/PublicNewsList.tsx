import { NewsCard } from '@/app/(publicGroup)/_components/news/NewsCard';
import { IPost } from '@/lib/types';
import { getAllNews } from '../../_actions/getAllNews';
import { NewsPagination } from './NewsPagination';
// import { getPosts } from '../../_actions/getPosts';

export async function PublicNewsList({
    searchParams,
}: {
    searchParams?: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}) {
    const query = await searchParams;

    const result = await getAllNews({
        endpoint: '/api/posts',
        query: {
            ...query,
            limit: '3',
        },
        withAuth: true,
        tags: ['posts'],
    });

    if (!result.success || !result.data?.length) {
        return (
            <p className="py-12 text-center text-muted-foreground">
                No news found.
            </p>
        );
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {result.data.map((post: IPost) => (
                    <NewsCard key={post.id} post={post} />
                ))}
            </div>

            <NewsPagination
                currentPage={result.meta.page}
                totalPages={result.meta.totalPages}
            />
        </div>
    );
}
