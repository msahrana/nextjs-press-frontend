import { Badge } from '@/components/ui/badge';

import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@/components/ui/table';

interface Post {
    id: string;
    title: string;
    author: string;
    status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';
    views: number;
}

interface RecentPostsTableProps {
    posts: Post[];
}

const RecentPostsTable = ({ posts }: RecentPostsTableProps) => {
    return (
        <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-5 text-lg font-semibold">Recent Posts</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Views</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell className="font-medium">
                                {post.title}
                            </TableCell>

                            <TableCell>{post.author}</TableCell>

                            <TableCell>
                                <Badge
                                    variant={
                                        post.status === 'PUBLISHED'
                                            ? 'default'
                                            : 'secondary'
                                    }
                                >
                                    {post.status}
                                </Badge>
                            </TableCell>

                            <TableCell className="text-right">
                                {post.views}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default RecentPostsTable;
