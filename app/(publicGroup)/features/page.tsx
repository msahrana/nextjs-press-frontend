import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const featuresList = [
    {
        title: 'Role-Based Access Control',
        description:
            'Distinct permissions for Users and Admins. Admins can manage all content, while users can only edit their own posts and comments.',
    },
    {
        title: 'Comment Moderation',
        description:
            'Keep your community safe. Admins can approve or reject comments, and only approved comments are displayed on public posts.',
    },
    {
        title: 'Advanced Search & Filtering',
        description:
            'Find content instantly. Query posts by tags, authors, featured status, or sort them by creation date and view count.',
    },
];

export default function Features() {
    return (
        <section id="features" className="w-full py-20 md:py-28 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Text & List */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                Core Features
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                Everything you need to grow your blog
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Prisma Press isn&apos;t just a backend;
                                it&apos;s a complete modular ecosystem designed
                                for developers and writers. Focus on your
                                content while we handle the heavy lifting.
                            </p>
                        </div>

                        <ul className="space-y-5 pt-4">
                            {featuresList.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <div className="shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Visual Mockup */}
                    <div className="relative">
                        <div className="bg-card border border-border rounded-xl shadow-xl p-6 max-w-md mx-auto lg:ml-auto">
                            <div className="flex items-center gap-2 mb-6 border-b pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <span className="ml-2 text-sm text-muted-foreground font-mono">
                                    admin-dashboard
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                    <span className="text-sm font-medium">
                                        Total Posts
                                    </span>
                                    <span className="text-xl font-bold text-primary">
                                        1,204
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                    <span className="text-sm font-medium">
                                        Approved Comments
                                    </span>
                                    <span className="text-xl font-bold text-primary">
                                        4,892
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                    <span className="text-sm font-medium">
                                        Total Views
                                    </span>
                                    <span className="text-xl font-bold text-primary">
                                        125k
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
