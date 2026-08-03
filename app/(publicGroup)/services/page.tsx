import {
    PenSquare,
    ShieldCheck,
    Users,
    MessageSquare,
    BarChart3,
    Database,
    Search,
    Code2,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react';

const services = [
    {
        icon: PenSquare,
        title: 'Content Publishing',
        description:
            'Create, edit, publish, archive, and manage blog posts with a clean and efficient workflow.',
    },
    {
        icon: ShieldCheck,
        title: 'Authentication & Security',
        description:
            'Secure authentication using JWT, Refresh Tokens, encrypted passwords, and role-based authorization.',
    },
    {
        icon: Users,
        title: 'User Management',
        description:
            'Manage users, profiles, roles, and account status with complete administrative control.',
    },
    {
        icon: MessageSquare,
        title: 'Comment Moderation',
        description:
            'Allow readers to engage with articles while giving administrators moderation capabilities.',
    },
    {
        icon: Search,
        title: 'Search & Filtering',
        description:
            'Quickly discover posts using keywords, tags, authors, publication status, and featured filters.',
    },
    {
        icon: BarChart3,
        title: 'Analytics Dashboard',
        description:
            'Monitor posts, comments, users, and total views through a comprehensive reporting system.',
    },
    {
        icon: Database,
        title: 'Database Management',
        description:
            'Powered by PostgreSQL and Prisma ORM for reliable, scalable, and high-performance data management.',
    },
    {
        icon: Code2,
        title: 'REST API',
        description:
            'Well-structured REST APIs make frontend integration simple and developer-friendly.',
    },
];

const workflow = [
    'User Registration & Authentication',
    'Create and Publish Articles',
    'Manage User Profiles',
    'Engage Through Comments',
    'Moderate Content',
    'Track Platform Statistics',
];

const ServicesPage = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-5xl font-bold">Services We Provide</h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
                        Prisma Press delivers everything needed to build,
                        manage, and scale a modern blogging platform—from
                        authentication and publishing to analytics and content
                        moderation.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="container mx-auto px-6 py-20">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold">Core Services</h2>

                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Designed for developers, writers, and organizations who
                        need a secure, fast, and scalable publishing platform.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4">
                                    <Icon className="h-8 w-8 text-blue-700" />
                                </div>

                                <h3 className="mb-3 text-xl font-semibold">
                                    {service.title}
                                </h3>

                                <p className="leading-7 text-slate-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Workflow */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Simple Publishing Workflow
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Prisma Press streamlines the entire content
                                lifecycle—from user registration to publishing
                                and community engagement.
                            </p>

                            <div className="mt-10 space-y-5">
                                {workflow.map((step) => (
                                    <div
                                        key={step}
                                        className="flex items-center gap-4"
                                    >
                                        <CheckCircle2 className="h-6 w-6 text-green-600" />

                                        <span className="text-lg">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-xl">
                            <h3 className="text-3xl font-bold">
                                Why Choose Prisma Press?
                            </h3>

                            <p className="mt-6 leading-8 text-blue-100">
                                Built with modern technologies including
                                Express.js, Prisma ORM, PostgreSQL, JWT,
                                TypeScript, and Next.js to ensure reliability,
                                security, and performance.
                            </p>

                            <div className="mt-10 space-y-5">
                                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                                    <span>RESTful APIs</span>

                                    <ArrowRight className="h-5 w-5" />
                                </div>

                                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                                    <span>Role-Based Authorization</span>

                                    <ArrowRight className="h-5 w-5" />
                                </div>

                                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                                    <span>Secure Authentication</span>

                                    <ArrowRight className="h-5 w-5" />
                                </div>

                                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                                    <span>Scalable Database</span>

                                    <ArrowRight className="h-5 w-5" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span>Modern Developer Experience</span>

                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Ready to Build Your Blog Platform?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                        Whether you`re creating a personal blog, company
                        knowledge base, or large-scale publishing platform,
                        Prisma Press provides the tools you need.
                    </p>

                    <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-200">
                        Get Started
                    </button>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
