import {
    BookOpen,
    ShieldCheck,
    PenSquare,
    MessageCircle,
    Search,
    BarChart3,
    User,
    Lock,
    Sparkles,
} from 'lucide-react';

const features = [
    {
        title: 'Powerful Blog Management',
        description:
            'Create, edit, publish, archive, and organize blog posts with an intuitive writing experience.',
        icon: PenSquare,
    },
    {
        title: 'Secure Authentication',
        description:
            'JWT authentication with refresh tokens, encrypted passwords, and protected API routes.',
        icon: Lock,
    },
    {
        title: 'User Profiles',
        description:
            'Every user has a customizable profile including profile photo and biography.',
        icon: User,
    },
    {
        title: 'Comment System',
        description:
            'Readers can engage with articles through comments while admins can moderate discussions.',
        icon: MessageCircle,
    },
    {
        title: 'Advanced Search',
        description:
            'Find posts instantly using keywords, tags, authors, publication status, and featured filters.',
        icon: Search,
    },
    {
        title: 'Analytics',
        description:
            'Track views, published articles, comments, and platform growth from the admin dashboard.',
        icon: BarChart3,
    },
    {
        title: 'Content Security',
        description:
            'Role-based authorization ensures only authorized users can manage content.',
        icon: ShieldCheck,
    },
    {
        title: 'Modern Technology',
        description:
            'Built using Next.js, Express.js, Prisma ORM, PostgreSQL, and TypeScript.',
        icon: Sparkles,
    },
    {
        title: 'Publishing Workflow',
        description:
            'Draft, publish, archive, and feature articles with complete editorial control.',
        icon: BookOpen,
    },
];

const FeaturesPage = () => {
    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero */}

            <section className="bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-5xl font-bold">
                        Everything You Need to Run a Modern Blog
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-200">
                        Prisma Press provides a secure, scalable, and modern
                        blogging platform powered by Express, Prisma,
                        PostgreSQL, and Next.js.
                    </p>
                </div>
            </section>

            {/* Features */}

            <section className="container mx-auto px-6 py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl bg-white p-8 shadow-sm border hover:shadow-xl transition"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
                                    <Icon className="h-7 w-7 text-indigo-700" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-7">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why Choose */}

            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl font-bold">
                            Why Developers Love Prisma Press
                        </h2>

                        <p className="mt-6 text-slate-600 text-lg">
                            Prisma Press isn`t just another blogging platform.
                            It combines clean architecture, secure
                            authentication, Prisma ORM, and a modern developer
                            experience to help you build production-ready
                            applications faster.
                        </p>

                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600">
                                    100%
                                </h3>

                                <p className="mt-2 text-slate-600">
                                    TypeScript
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600">
                                    JWT
                                </h3>

                                <p className="mt-2 text-slate-600">
                                    Secure Authentication
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600">
                                    Prisma
                                </h3>

                                <p className="mt-2 text-slate-600">
                                    Modern ORM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FeaturesPage;
