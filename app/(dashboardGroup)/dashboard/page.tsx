import { BookOpen, Clock, Heart, UserRound } from 'lucide-react';
import StatCard from '../_components/stat-card';
import DashboardHeader from '../_components/dashboard-header';

const UserDashboardPage = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] space-y-6 h-fit">
            {/* Header */}
            <DashboardHeader
                title={
                    <>
                        Welcome to <span className="text-red-500">User</span>
                        Dashboard
                    </>
                }
                description="Create, manage and analyze your blog content"
            />
            {/* Statistics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Reading List"
                    value="24"
                    icon={BookOpen}
                    description="Saved articles"
                />

                <StatCard
                    title="Favorites"
                    value="12"
                    icon={Heart}
                    description="Favorite posts"
                />

                <StatCard
                    title="Reading Time"
                    value="18h"
                    icon={Clock}
                    description="This month"
                />

                <StatCard
                    title="Profile"
                    value="85%"
                    icon={UserRound}
                    description="Profile completed"
                />
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Recent Activity</h2>

                <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                        <div>
                            <p className="font-medium">
                                Read: Introduction to Prisma ORM
                            </p>

                            <p className="text-sm text-muted-foreground">
                                2 hours ago
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-3">
                        <div>
                            <p className="font-medium">
                                Added Next.js Architecture Guide
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Yesterday
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">
                                Updated profile information
                            </p>

                            <p className="text-sm text-muted-foreground">
                                3 days ago
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Posts */}
            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Recommended Posts</h2>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {[
                        'Mastering TypeScript',
                        'Next.js App Router Guide',
                        'Prisma Database Design',
                    ].map((post) => (
                        <div
                            key={post}
                            className="rounded-lg border p-4 hover:bg-muted transition"
                        >
                            <h3 className="font-medium">{post}</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Learn modern web development techniques.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboardPage;
