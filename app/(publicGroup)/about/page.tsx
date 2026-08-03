import { Badge } from '@/components/ui/badge';
import { Layers, Database, Shield, Zap } from 'lucide-react';

const techStack = [
    'Next.js',
    'Express 5',
    'Prisma 7.x',
    'PostgreSQL',
    'TypeScript',
    'JWT Auth',
];
const highlights = [
    {
        icon: Layers,
        title: 'Modular Architecture',
        description:
            'Built with a strict, scalable folder structure that separates concerns between routes, services, and controllers.',
    },
    {
        icon: Database,
        title: 'Prisma Powered',
        description:
            'Type-safe database queries using Prisma ORM and PostgreSQL, ensuring data integrity and rapid development.',
    },
    {
        icon: Shield,
        title: 'Secure by Default',
        description:
            'JWT access/refresh tokens and bcrypt password hashing come standard out of the box.',
    },
    {
        icon: Zap,
        title: 'Blazing Fast',
        description:
            'Compiled TypeScript output and optimized API endpoints ensure minimal latency and high throughput.',
    },
];

export default function About() {
    return (
        <section id="about" className="w-full py-20 md:py-28 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                {/* Top Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                About Prisma Press
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                A developer-first blog backend
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Prisma Press is designed to be the absolute
                                source of truth for your blog infrastructure. It
                                provides a robust API for authentication, user
                                profiles, post management, and admin reporting
                                without the bloat.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Built on modern web standards, it leverages the
                                power of Prisma 7.x and Express 5 to give you
                                type-safe, maintainable code from day one.
                            </p>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 pt-4">
                            {techStack.map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-sm py-1 px-3"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-background border border-border rounded-lg p-6 shadow-sm"
                                >
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
