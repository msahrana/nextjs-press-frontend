'use client';

import Link from 'next/link';
import { Plus, Users, FileText, MessageCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

const QuickActions = () => {
    return (
        <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-5 text-lg font-semibold">Quick Actions</h2>

            <div className="grid gap-3">
                <Button asChild className="justify-start">
                    <Link href="/dashboard/my-posts">
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Post
                    </Link>
                </Button>

                <Button variant="secondary" asChild className="justify-start">
                    <Link href="/dashboard/users">
                        <Users className="mr-2 h-4 w-4" />
                        Manage Users
                    </Link>
                </Button>

                <Button variant="secondary" asChild className="justify-start">
                    <Link href="/dashboard/my-posts">
                        <FileText className="mr-2 h-4 w-4" />
                        Manage Posts
                    </Link>
                </Button>

                <Button variant="secondary" asChild className="justify-start">
                    <Link href="/dashboard/comments">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Moderate Comments
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default QuickActions;
