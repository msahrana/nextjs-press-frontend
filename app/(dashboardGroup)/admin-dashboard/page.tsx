import {
    Users,
    UserRound,
    FileText,
    MessageSquare,
    Eye,
    Star,
} from 'lucide-react';

import DashboardHeader from '../_components/dashboard-header';
import QuickActions from '../_components/quick-actions';
import RecentPostsTable from '../_components/recent-posts-table';
import StatCard from '../_components/stat-card';

const stats = [
    {
        title: 'Total Users',
        value: 1240,
        icon: Users,
        description: '+12 this week',
    },
    {
        title: 'Authors',
        value: 86,
        icon: UserRound,
        description: 'Active writers',
    },
    {
        title: 'Posts',
        value: 3560,
        icon: FileText,
        description: 'Published + Draft',
    },
    {
        title: 'Comments',
        value: 12345,
        icon: MessageSquare,
        description: 'Approved comments',
    },
    {
        title: 'Views',
        value: '489K',
        icon: Eye,
        description: 'Total article views',
    },
    {
        title: 'Featured Posts',
        value: 24,
        icon: Star,
        description: 'Homepage featured',
    },
];

const recentPosts = [
    {
        id: '1',
        title: 'Getting Started with Prisma',
        author: 'John Doe',
        status: 'PUBLISHED' as const,
        views: 1450,
    },
    {
        id: '2',
        title: 'Next.js Authentication Guide',
        author: 'Jane Smith',
        status: 'DRAFT' as const,
        views: 230,
    },
    {
        id: '3',
        title: 'Express.js Best Practices',
        author: 'Alex Johnson',
        status: 'PUBLISHED' as const,
        views: 980,
    },
    {
        id: '4',
        title: 'Mastering PostgreSQL',
        author: 'Emily Davis',
        status: 'ARCHIVED' as const,
        views: 520,
    },
];

const recentUsers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'AUTHOR',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'USER',
    },
    {
        id: 3,
        name: 'Alex Johnson',
        email: 'alex@example.com',
        role: 'AUTHOR',
    },
];

const AdminDashboard = () => {
    return (
        <div className="space-y-8">
            <DashboardHeader
                title={
                    <>
                        Welcome to <span className="text-red-500">Admin </span>
                        Dashboard
                    </>
                }
                description="Monitor users, posts and platform activities."
            />

            {/* Statistics */}

            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {stats.map((item) => (
                    <StatCard
                        key={item.title}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                        description={item.description}
                    />
                ))}
            </section>

            {/* Content */}

            <section className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <RecentPostsTable posts={recentPosts} />
                </div>

                <QuickActions />
            </section>

            {/* Recent Users */}

            <section className="rounded-xl border bg-card p-6">
                <h2 className="mb-5 text-lg font-semibold">Recent Users</h2>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="pb-3">Name</th>

                                <th className="pb-3">Email</th>

                                <th className="pb-3">Role</th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentUsers.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b last:border-0"
                                >
                                    <td className="py-4 font-medium">
                                        {user.name}
                                    </td>

                                    <td className="py-4 text-muted-foreground">
                                        {user.email}
                                    </td>

                                    <td className="py-4">
                                        <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                            {user.role}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;
