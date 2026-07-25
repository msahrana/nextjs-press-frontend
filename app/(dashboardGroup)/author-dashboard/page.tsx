import { FileText, Eye, MessageSquare, PenSquare } from 'lucide-react';
import DashboardHeader from '../_components/dashboard-header';
import StatCard from '../_components/stat-card';

const AuthorDashboardPage = async () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <DashboardHeader
                title={
                    <>
                        Welcome to <span className="text-red-500">Author</span>
                        Dashboard
                    </>
                }
                description="Create, manage and analyze your blog content"
            />

            {/* Statistics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Posts"
                    value="48"
                    icon={FileText}
                    description="Published articles"
                />

                <StatCard
                    title="Drafts"
                    value="8"
                    icon={PenSquare}
                    description="Unpublished posts"
                />

                <StatCard
                    title="Total Views"
                    value="12.5K"
                    icon={Eye}
                    description="Post impressions"
                />

                <StatCard
                    title="Comments"
                    value="245"
                    icon={MessageSquare}
                    description="Reader interactions"
                />
            </div>

            {/* Recent Posts */}
            <div className="rounded-xl border p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Recent Posts</h2>

                    <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
                        Create Post
                    </button>
                </div>

                <div className="mt-5 space-y-4">
                    {[
                        {
                            title: 'Understanding Prisma ORM',
                            status: 'Published',
                            views: '2.4K',
                        },
                        {
                            title: 'Next.js Server Components Guide',
                            status: 'Draft',
                            views: '0',
                        },
                        {
                            title: 'Building REST API with Express',
                            status: 'Published',
                            views: '5.8K',
                        },
                    ].map((post) => (
                        <div
                            key={post.title}
                            className="flex items-center justify-between rounded-lg border p-4"
                        >
                            <div>
                                <h3 className="font-medium">{post.title}</h3>

                                <p className="text-sm text-muted-foreground">
                                    {post.status}
                                </p>
                            </div>

                            <div className="text-sm text-muted-foreground">
                                {post.views} views
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Quick Actions</h2>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div className="cursor-pointer rounded-lg border p-5 hover:bg-muted transition">
                        <PenSquare className="mb-3" size={22} />

                        <h3 className="font-medium">Write New Post</h3>

                        <p className="text-sm text-muted-foreground">
                            Create a new article
                        </p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-5 hover:bg-muted transition">
                        <FileText className="mb-3" size={22} />

                        <h3 className="font-medium">Manage Posts</h3>

                        <p className="text-sm text-muted-foreground">
                            Edit and delete your posts
                        </p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-5 hover:bg-muted transition">
                        <MessageSquare className="mb-3" size={22} />

                        <h3 className="font-medium">Review Comments</h3>

                        <p className="text-sm text-muted-foreground">
                            Respond to readers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorDashboardPage;
